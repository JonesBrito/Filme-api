const router = require('express').Router()
const Filme = require('../models/Filmes')

router.post('/insert', async (req, res) => {

    const {nome, descricao, genero, produtora, anolancamento, preco} = req.body

    if(!nome){
        res.status(422).json({message: 'Por favor preencha o nome do filme'});
        return;
    }
    if(!preco){
        res.status(422).json({message: 'Por favor preencha o preço do filme'});
        return;
    }

    const filme = {
        nome,
        descricao,
        genero,
        produtora,
        anolancamento,
        preco
    }

    try {
       
        await Filme.create(filme);
        res.status(201).json({message: 'filme inserted successfully'});

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

})

router.get('/find', async (req,res) => {

    try {
        const dataFilme = await Filme.find();
        res.status(200).json(dataFilme);

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

})

router.get('/find-id-filme/:id', async (req, res) => {

    const idFilme = req.params.id;

    try {
        const dataFilme = await Filme.findOne({_id: idFilme});

        if(!dataFilme){
            res.status(424).json({message: 'filme not found'});
            return;
        }

        res.status(200).json(dataFilme)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

})

router.patch('/update/:id', async (req, res) => {

    const idFilme = req.params.id;
    const { nome, descricao, genero, produtora, anolancamento, preco } = req.body

    const filme = {
        nome,
        descricao,
        genero,
        produtora,
        anolancamento,
        preco
    }
   

    try {

        const filmeUpdate = await Filme.updateOne({_id: idFilme}, filme);

        if(filmeUpdate.matchedCount === 0){
            res.status(422).json({message: 'filme not found'});
            return;
        }
        

        res.status(200).json(filme);
        
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
})


router.delete('/delete/:id', async (req, res) => {

    const idFilme = req.params.id;

    const dataFilme = await Filme.findOne({_id: idFilme});

    if(!dataFilme){
        res.status(424).json({message: 'filme not found'});
        return;
    }
 

    try {
        await Filme.deleteOne({_id: idFilme})
        res.status(200).json({message: "filme deleted successfully"})
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

})

module.exports = router