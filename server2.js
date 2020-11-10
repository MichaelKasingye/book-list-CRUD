// //server with plain nodejs
// const http = require('http');
// const hostname = 'localhost';
// const port = '5000';
// //create server
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello From Server');
// });

// server.listen(port,hostname,(err)=>{
//     if(err) console.log(err);
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

//server with expressjs
const express = require('express');
const hostname = 'localhost';
const port = '5000';
const server = express();

server.get('/',(req,res)=>{
    res.json(
        {
            userName:"andrew",
        password:"1234456",
        email:"andrew@gmail.com"
    }
        )
});
server.get('/products',(req,res)=>{
    res.json(
        {name:"shorts",
        price:"45000ugx",
        ProductImage:"https://images.unsplash.com/photo-1597169428688-254b4223ba7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
        )
});

server.listen(port,hostname,(err)=>{
    if(err) {
        console.log(err)
    };
    console.log(`Server running at http://${hostname}:${port}/`);
})