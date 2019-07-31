
var fs = require('fs');
var express = require('express');
var cors = require('cors');
var app = express();
var SHA256 = require('./script/module/build/SHA256.min.js');

 


var whitelist = ['www.caitan.me'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    callback(null, true)
  } else {
    callback(new Error('Not allowed by CORS'))
  }
}

var links = [];



const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
 



app.get('/script*',cors(corsOptionsDelegate),function(req,res,next){
	res.type('.js');
	res.sendFile(req.originalUrl, { root: __dirname});
})

app.get('/style*',cors(corsOptionsDelegate),function(req,res,next){
	res.sendFile(req.originalUrl, { root: __dirname});
})
app.get('/misc*',cors(corsOptionsDelegate),function(req,res,next){
	res.sendFile(req.originalUrl, { root: __dirname});
})


app.get('',cors(), function(req,res,next){
	res.sendFile("/pages/index.html", { root: __dirname });
})

app.post('/api/connect',cors(corsOptionsDelegate),function(req,res,next){
	let d = new Date();
	const token = SHA256([d.getTime(),req.connection.remoteAddress]);
	links.push(token);
	setTimeout(function(){
		links.splice(links.indexOf(token),1);
	},2000)
	res.json(token);
})





app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});


