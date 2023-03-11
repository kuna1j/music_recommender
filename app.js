const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.get('/' , function(req , res){
res.render('index' , {});
});

var sleepyarr = []
var contentarr = []
var depressedarr = [] 
var distressedarr = [] 
var energeticarr = []
var happyarr = [] 
var miseryarr = [] 
var excitedarr = [] 

const fs = require("fs");

// Read users.json file
fs.readFile("sleepy.json", function(err, data) {
    // Check for errors
    if (err) throw err;
    // Converting to JSON
    const sleepy = JSON.parse(data);

    for(var i =0 ; i < 10 ;i++){
      sleepyarr[i] = "https://open.spotify.com/embed/track/"+sleepy[i].id+"?utm_source=generator";
    }
});

fs.readFile("content.json", function(err, data) {
  // Check for errors
  if (err) throw err;
  // Converting to JSON
  const content = JSON.parse(data);

  for(var i =0 ; i < 10 ;i++){
    contentarr[i] = "https://open.spotify.com/embed/track/"+content[i].id+"?utm_source=generator";
  }
});

fs.readFile("depressed.json", function(err, data) {
  // Check for errors
  if (err) throw err;
  // Converting to JSON
  const depressed = JSON.parse(data);

  for(var i =0 ; i < 10 ;i++){
    depressedarr[i] = "https://open.spotify.com/embed/track/"+depressed[i].id+"?utm_source=generator";
  }
});

fs.readFile("distressed.json", function(err, data) {
  // Check for errors
  if (err) throw err;
  // Converting to JSON
  const distressed = JSON.parse(data);

  for(var i =0 ; i < 10 ;i++){
    distressedarr[i] = "https://open.spotify.com/embed/track/"+distressed[i].id+"?utm_source=generator";
  }
});

fs.readFile("energetic.json", function(err, data) {
  // Check for errors
  if (err) throw err;
  // Converting to JSON
  const energetic = JSON.parse(data);

  for(var i =0 ; i < 10 ;i++){
    energeticarr[i] = "https://open.spotify.com/embed/track/"+energetic[i].id+"?utm_source=generator";
  }
});

fs.readFile("excited.json", function(err, data) {
  // Check for errors
  if (err) throw err;
  // Converting to JSON
  const excited = JSON.parse(data);

  for(var i =0 ; i < 10 ;i++){
    excitedarr[i] = "https://open.spotify.com/embed/track/"+excited[i].id+"?utm_source=generator";
  }
});

fs.readFile("happy.json", function(err, data) {
  // Check for errors
  if (err) throw err;
  // Converting to JSON
  const happy = JSON.parse(data);

  for(var i =0 ; i < 10 ;i++){
    happyarr[i] = "https://open.spotify.com/embed/track/"+happy[i].id+"?utm_source=generator";
  }
});fs.readFile("misery.json", function(err, data) {
  // Check for errors
  if (err) throw err;
  // Converting to JSON
  const misery = JSON.parse(data);

  for(var i =0 ; i < 10 ;i++){
    miseryarr[i] = "https://open.spotify.com/embed/track/"+misery[i].id+"?utm_source=generator";
  }
});


app.get('/sleepy' , function(req , res){
  console.log(sleepyarr[0])
  res.render('sleepy' , {sleepyarr : sleepyarr })
});

app.get('/content' , function(req , res){
  console.log(contentarr[0])
  res.render('content' , {contentarr : contentarr })
});

app.get('/depressed' , function(req , res){
  console.log(depressedarr[0])
  res.render('depressed' , {depressedarr : depressedarr })
});

app.get('/distressed' , function(req , res){
  console.log(distressedarr[0])
  res.render('distressed' , {distressedarr : distressedarr })
});

app.get('/energetic' , function(req , res){
  console.log(energeticarr[0])
  res.render('energetic' , {energeticarr : energeticarr })
});

app.get('/excited' , function(req , res){
  console.log(excitedarr[0])
  res.render('excited' , {excitedarr : excitedarr })
});

app.get('/happy' , function(req , res){
  console.log(happyarr[0])
  res.render('happy' , {happyarr : happyarr })
});

app.get('/misery' , function(req , res){
  console.log(miseryarr[0])
  res.render('misery' , {miseryarr : miseryarr })
});


app.listen(3000, function(){
  console.log("Server Started");
  console.log("teaching kai unteaching kun");
});
