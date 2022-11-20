// Zone d'importation des modules
const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    userId:{type:String},
    prenom:{type:String,required:true},
    nom:{type:String,required:true},
    address:{type:String,required:true},
   
})

module.exports = mongoose.model('Profile',profileSchema)
