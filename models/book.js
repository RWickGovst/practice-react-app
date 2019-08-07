// dependencies
const mongoose = require('mongoose');

//schema instance
const Schema = mongoose.Schema;

//new Schema = Book
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});
