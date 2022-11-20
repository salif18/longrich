//Zone d'importation
const Profile = require('../models/tble_profile');

//creer
exports.creadProfile = (req,res,next)=>{
    const profile = new Profile({
        prenom:req.body.prenom,
        nom:req.body.nom,
        address:req.body.address,
        
    })
       profile.save()
      .then(()=>res.status(201).json({message:'produit inserer'}))
      .catch((error)=>res.status(400).json({error}))

}

//lire Tous
exports.readAllProfile = (req,res,next)=>{
    Profile.find()
    .then((profs)=>res.status(200).json(profs))
    .catch((error)=>res.status(400).json({error}))
}

//selectioner un
exports.readOneProfile = (req,res,next)=>{
    Products.findOne({id:req.params.id})
    .then((prof)=>res.status(200).json(prof))
    .catch((error)=>res.status(400).json({error}))
}

//modifier
exports.updateProfile = (req,res,next) => {
    Profile.updateOne({id:req.params.id},{...req.body, id:req.params.id})
    .then(()=>res.status(201).json({message:'profile modifier'}))
    .catch((error)=>res.status(400).json({error}))
}

//supprimer
exports.deleteProfile = (req,res,next) =>{
    Profile.deleteOne({id:req.params.id})
    .then(()=>res.status(200).json({message:'profile supprimer'}))
    .catch((error)=>res.status(400).json({error}))
}