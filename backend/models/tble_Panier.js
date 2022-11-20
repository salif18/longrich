// Zone d'importation des modules
const mongoose = require('mongoose')

const panSchema = mongoose.Schema({
    userId:{type:String},
    image:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String},
    category:{type:String,required:true},
    price:{type:String,required:true},
    qty:{type:Number,required:true}
})

module.exports = mongoose.model('Panier',panSchema)