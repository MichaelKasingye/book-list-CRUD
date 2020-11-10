
const mongoose = require('mongoose');
//mongoose schema
const Schema = mongoose.Schema;

//Create a book Schema
const BookSchema = new Schema({
    title: { type: String,
        //  unique: true
         },
    author: { type: String },
    category: { type: String }
    // available: {
    //     type: Boolean,
    //     default: false
    // }
});

//create the book model 
const Book = mongoose.model('book', BookSchema); //key note on name

//export the model to be used elsewhere
module.exports = Book;
