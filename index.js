const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express ();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/A3', {useNewUrlParser: true});
//mongoose.connect('mongodb+srv://VandiMoreno:12345@cluster0.neuyx.mongodb.net/?retryWrites=true&w=majority');
requireDir('./src/models');


app.use('/sistema', require('./src/routes/routes'));
app.listen(3001);