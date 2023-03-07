import tekore as tk

def authorize():
    CLIENT_ID = 'f040d636520a40cda81b230963139252'
    CLIENT_SECRET = '0092c3ab0ea446c9aefb0174049a5603'
    token = tk.request_client_token(CLIENT_ID, CLIENT_SECRET)

    return tk.Spotify(token)

import authorization
import pandas as pd
from tqdm import tqdm
import time

sp = authorization.authorize() # Authorize and call access object "sp"
genres = sp.recommendation_genre_seeds() # Get all genres
n_recs = 5 # Set number of recommendations per genre

data_dict = {"id":[], "genre":[], "track_name":[], "artist_name":[],
             "valence":[], "energy":[]}

# Get recs for every genre
for g in tqdm(genres):
    recs = sp.recommendations(genres = [g], limit = n_recs) # Get n recommendations
    recs = eval(recs.json().replace("null", "-999").replace("false", "False").replace("true", "True"))["tracks"] # json-like string to dict

    for track in recs:
        # ID and Genre
        data_dict["id"].append(track["id"])
        data_dict["genre"].append(g)
        # Metadata
        track_meta = sp.track(track["id"])
        data_dict["track_name"].append(track_meta.name)
        data_dict["artist_name"].append(track_meta.album.artists[0].name)
        # Valence and energy
        track_features = sp.track_audio_features(track["id"])
        data_dict["valence"].append(track_features.valence)
        data_dict["energy"].append(track_features.energy)
        
        # Wait 0.2 seconds per track to avoid api overheating
        time.sleep(0.2)

# Creating a dataframe and storing it in a csv file
df = pd.DataFrame(data_dict)
df.drop_duplicates(subset = "id", keep = "first", inplace = True)
df.to_csv("dataset.csv", index = False)
