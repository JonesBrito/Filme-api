//express
const express = require("express");
const app = express()
//mongo - database
const mongoose = require("mongoose")

const PORT = process.env.PORT || 9090;
//dados database
const DB_USER = 'Jones_S_Brito';
const DB_PASS = encodeURIComponent('Mobral123');

app.use(
    express.urlencoded({
        extended: true,
    }),
)

//permitindo a leitura de json
app.use(express.json())

//rotas
const filmesRoutes = require('./routes/filmesRoutes')

app.use('/filme', filmesRoutes)





//configuração de rotas
app.get('/', (req, res) => {

    res.json({ message: "Filme Deu Bom!" });

})




mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@jsb.dginzkz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('conectamos ao banco de dados')
        //porta api
        app.listen(PORT)
    })
    .catch((err) => {
        console.log(err)
    })

