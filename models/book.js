const mongoose = require('mongoose')
const  BookSchema = mongoose.Schema({
        name: String,
        price: Number,
        quantity: Number
});
   
const Book = mongoose.model('Book', BookSchema, 'bookstore');
module.exports = Book;