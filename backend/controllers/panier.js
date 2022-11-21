//Zone d'importation
const Panier = require('../models/tble_Panier');

//creer
exports.addjPanier = (req,res,next)=>{
    const panier = new Panier({
        userId:req.body.userId,
        image:req.body.image,
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        price:req.body.price,
        qty:req.body.qty
    })
       panier.save()
      .then(()=>res.status(201).json({message:'panier inserer'}))
      .catch((error)=>res.status(400).json({error}))

}

//lire Tous
exports.readAllPanier = (req,res,next)=>{
    Panier.find()
    .then((panie)=>res.status(200).json(panie))
    .catch((error)=>res.status(400).json({error}))
}

//supprimer
exports.deletePanier = (req,res,next) =>{
    Panier.deleteOne({id:req.params.id})
    .then(()=>res.status(200).json({message:'produit supprimer'}))
    .catch((error)=>res.status(400).json({error}))
}