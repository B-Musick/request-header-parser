// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// require('dotenv').config;

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res)=> { res.sendFile(__dirname + '/views/index.html'); });

// your first API endpoint... 
app.get("/api/hello", (req, res)=> { res.json({greeting: 'hello API'}); });

app.get('/api/whoami',(req,res)=>{
  let language = req.headers['accept-language'];
  let userAgent = req.headers['user-agent'];
  res.json({"ipaddress":req.ip,'language':language,"software":userAgent})
})

// listen for requests process.env.PORT
var listener = app.listen(3000, ()=> {
  console.log('Your app is listening on port ' + listener.address().port);
});
