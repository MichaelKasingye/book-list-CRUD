//connecting Database to nodejs
//(mongodb+srv://tugumeandree:<1234567890>@cluster0.9iurt.mongodb.net/<dbname>?retryWrites=true&w=majority)

const mongoose = require('mongoose');
const express = require ('express');
const server = express();
// const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const indexRouter = require('./Routes/index.js');

var hostname = '127.0.0.1';
var port = '8080';

//Implementing middleware using the server.use method
server.use(express.json());
// server.use(express.urlencoded());
server.use(express.urlencoded({ extended: true }));
server.use('/',indexRouter);


mongoose.connect('mongodb://localhost/core4',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error',function(error){
    console.log('connection error');
});

db.once('open',function(){
    console.log('database connected');
});

//Data modelling
// mongoose.model();
// mongoose.Schema();

//EXTERNAL MODEL
//getting the model from models folder using it's path
// const Book = require('./Models/Book.model'); 




// shows all the books available in the books collection


server.listen(port,function(){
    console.log(`Server is running at http://${hostname}:${port}/`); 
})