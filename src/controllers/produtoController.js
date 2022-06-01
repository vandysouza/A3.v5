const mongoose = require('mongoose');
const Produto =  mongoose.model('Produto');


module.exports = {
    //Create no banco
    async insert (req, res){
        const produtos = await Produto.create(req.body);
        return res.json(produtos);
    },

    //Read no banco
    async index (req, res){
       const { page } = req.query;
       const produtos = await Produto.paginate({}, { page, limit: 5}); //quantidade de dados exibidos na pagina
       return res.json(produtos);
    },

    //Detalhes do produto no banco
    async details (req, res){
        const produtos = await Produto.findById(req.params.id);
        return res.json(produtos);
    },

    //Update no banco
    async update (req, res){
        const produtos = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(produtos);
    },

    //Delete no banco
    async delete (req, res){
         await Produto.findByIdAndRemove(req.params.id);
         return res.send();
    }



}