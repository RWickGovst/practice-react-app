// dependencies
const mongoose = require('mongoose');

// file imports
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        res.send('Find all was hit')
    },
    findById: (req, res) => {
        res.send('Find by ID was hit')
    },
    addBook: (req, res) => {
        res.send('Add book was hit')
    },
    updateBook: (req, res) => {
        res.send('Update book was hit')
    },
    deleteById: (req, res) => {
        res.send('Delete was hit')
    }
}