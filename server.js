//SERVER WITH EXPRESS JS
const express = require ('express');
const server = express();
var hostname = '127.0.0.1';
var port = '8080';

server.get('/',function(req,res){
    res.json({msg:'Hello from our Node Server'});
});


server.listen(port,function(){
    console.log(`Server is running at http://${hostname}:${port}/`); 
})

//SERVER WITH PLAIN NODEJS
// const http = require('http');
// var hostname = '127.0.0.1';
// var port = '8080';
// var server = http.createServer(function(req,res) { 
//  res.statusCode = 404;
//  res.setHeader('Content-type', 'plain text');
//   res.end('Hello from our Node Server'); 
// });

// server.listen(port, hostname, function(){ 
//   console.log(`Server is running at http://${hostname}:${port}/`); 
// });

