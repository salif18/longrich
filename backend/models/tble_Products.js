// Zone d'importation des modules
const mongoose = require('mongoose')

const prodSchema = mongoose.Schema({
    userId:{type:String,required:true},
    image:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String},
    category:{type:String,required:true},
    price:{type:String,required:true}
})

module.exports = mongoose.model('Products',prodSchema)