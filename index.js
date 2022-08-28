// Made by SaikiDesu (Mr.Aik3ro)
// YT: https://youtube.com/c/MrAik3ro
// FB: https://www.facebook.com/saikidesu.11
// Github: https://github.com/mraikero-01
// Random Image API, I hope this can help you!❤️

const express = require('express');
const secure = require('ssl-express-www')
const http = require('http');
const path = require('path');
const fs = require('fs');
const app = express()
app.use(secure)
app.enable('trust proxy');
app.use(express.static("assets"))

var port = process.env.PORT || 3000;

var randomimg = require('./materials/randomimg')

app.use('/api', randomimg)

app.use('/', (req, res) =>
  res.send("hello"))
  
app.listen(port, () => {
  console.log("API STARTED | LISTENING TO https://0.0.0.0:"+ port) 
})

module.exports = app

///////////////////////////////////////// Made By SaikiDesu ////////////////////////////////////////
