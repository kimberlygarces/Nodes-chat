const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = Schema({
    name: String,

    date: Date,
});

const model = mongoose.model('user', mySchema);
module.exports = model;