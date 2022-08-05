const mongoose = require("mongoose")

const Filmes = mongoose.model('Filmes', {
    nome: String,
    descricao: String,
    genero: String,
    produtora: String,
    anolancamento: String,
    preco: Number,
});

module.exports = Filmes;