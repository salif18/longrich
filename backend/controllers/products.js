//Zone d'importation
const Products = require('../models/tble_Products');
const fs = require('fs')
//creer
exports.creadProd = (req,res,next)=>{
    const products = new Products({
        userId:req.body.userId,
        image:req.body.image,
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        price:req.body.price
    })
    // const productsObject = JSON.parse(req.body.products);
    // delete productsObject.id;
    // delete productsObject.userId;
    // const products = new Products({
    //     ...productsObject,
    //     userId:req.auth.userId,
    //     imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`})


       products.save()
      .then(()=>res.status(201).json({message:'produit inserer'}))
      .catch((error)=>res.status(400).json({error}))

}

//lire Tous
exports.readAllProd = (req,res,next)=>{
    Products.find()
    .then((products)=>res.status(200).json(products))
    .catch((error)=>res.status(400).json({error}))
}

//selectioner un
exports.readOneProd = (req,res,next)=>{
    Products.findOne({id : req.params.id})
    .then((product)=>res.status(200).json(product))
    .catch((error)=>res.status(400).json({error}))
}

//modifier
exports.updateProd = (req,res,next) => {
    console.log('console')
    console.log({id : req.params.id})
    Products.updateOne({id: req.params.id},{...req.body, id: req.params.id})
    .then(()=>res.status(201).json({message:'produit modifier'}))
    .catch((error)=>res.status(400).json({error}))
}

//supprimer
exports.deleteProd = (req,res,next) =>{
    Products.deleteOne({id : req.params.id})
    .then(()=>res.status(200).json({message:'produit supprimer'}))
    .catch((error)=>res.status(400).json({error}))
}