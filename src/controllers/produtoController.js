const mongoose = require('mongoose');
const Produto =  mongoose.model('Produto');


module.exports = {
    //Create no banco
    async insert (req, res){
        const produtos = await Produto.create(req.body);
        return res.json(produtos);
    },

    //Read 
    async index (req, res){
       const { page } = req.query;
       const produtos = await Produto.paginate({}, { page, limit: 5}); //quantidade de dados exibidos na pagina
       return res.json(produtos);
    },

    async details (req, res){
        const produtos = await Produto.findById(req.params.id);
        return res.json(produtos);
    }


}