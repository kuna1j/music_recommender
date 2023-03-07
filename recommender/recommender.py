import pandas as pd
import numpy as np
from numpy.linalg import norm

#Load data
df = pd.read_csv("dataset.csv")
print(df.shape)
print(df.head())

#Create Mood Vector
df["mood_vec"] = df[["valence", "energy"]].values.tolist()
print(df["mood_vec"].head())

#Recommender function
def recommend(val, ener, n_recs=10):      
    track_moodvec = np.array([val, ener])
    df['distances'] = df['mood_vec'].apply(lambda x: norm(track_moodvec-np.array(x)))
    df_sorted = df.sort_values(by = "distances", ascending = True)
    return df_sorted.iloc[:n_recs]

#Storing 10 tracks based on each mood to their respective csv files    
df1 = recommend(1, 0.5, n_recs=10)
df1.to_csv("happy.csv", index = False)

df2 = recommend(0.5, 1, n_recs=10)
df2.to_csv("energetic.csv", index = False)

df3 = recommend(0.5, 0, n_recs=10)
df3.to_csv("sleepy.csv", index = False)

df4 = recommend(0, 0.5, n_recs=10)
df4.to_csv("misery.csv", index = False)

df5 = recommend(0.75, 0.75, n_recs=10)
df5.to_csv("excited.csv", index = False)

df6 = recommend(0.75, 0.25, n_recs=10)
df6.to_csv("content.csv", index = False)

df7 = recommend(0.25, 0.25, n_recs=10)
df7.to_csv("depressed.csv", index = False)

df8 = recommend(0.25, 0.75, n_recs=10)
df8.to_csv("distressed.csv", index = False)