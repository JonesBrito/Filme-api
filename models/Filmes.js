const mongoose = require("mongoose")

const Filmes = mongoose.model('Filmes', {
    name: String,
    description: String,
    genre: String,
    producer: String,
    releaseYear: String,
    value: Number,
});

module.exports = Filmes;