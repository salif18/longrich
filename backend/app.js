//Zone des importations du module express 
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./connection/connection');
const productRter = require('./routes/products');
const panierRter = require('./routes/panier');
const clientsRter = require('./routes/clients');


//Zone de configuration
app.use(express.json());
app.use(cors());

//Zone des fontions
app.use('/products',productRter);
app.use('/panier',panierRter);
app.use('/auth',clientsRter);
// app.use('/profile',profileRter);

//Zone d'exportation 
module.exports = app ;