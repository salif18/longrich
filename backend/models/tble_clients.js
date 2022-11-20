// Zone d'importation des modules
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const clientSchema = mongoose.Schema({
    numero:{type:Number,required:true,unique:true},
    password:{type:String,required:true}
})

clientSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Clients',clientSchema)