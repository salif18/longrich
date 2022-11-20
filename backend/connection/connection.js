//Zone d'importation 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const con = mongoose.connect(process.env.MONGO_URL,{
     useNewUrlParser:true,
     useUnifiedTopology:true
})
.then(()=>console.log('connecter a MongoDB'))
.catch(()=>console.log('erreur de connection'))

module.exports = mongoose;