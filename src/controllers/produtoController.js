const mongoose = require('mongoose');
const Produto =  mongoose.model('Produto');

module.exports = {
    async insert (req, res){
        const produtos = await Produto.create(req.body);
        return res.json(produtos);
    }
}