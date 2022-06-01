const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const  ProdSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true,
        uppercase: true,
        maxlength: 100
    },

    lote:{
        type: String,
        require: true,
        max: 9999,
        unique: true
    },

    funcao:{
        type: String,
        require: true,
        uppercase: true,
        maxlength: 100
    },

    alocado:{
        type: Boolean,
        require: true,
        default: true
    },

    vencimento: {
        type: Date,
        require:true,

    },

    quantidade:{
        type: Number,
        require: true,
        max: 9999
    },

    registro:{
        type: Date,
        default: Date.now
    }
});

ProdSchema.plugin(mongoosePaginate);
mongoose.model('Produto', ProdSchema);
