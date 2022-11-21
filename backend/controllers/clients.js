//Zone d'importation
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Clients = require('../models/tble_clients');
const dotenv =require('dotenv');
dotenv.config()
//fonction inscription
exports.signup = (req,res,next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash =>{
        const clients = new Clients({
            numero:req.body.numero,
            password: hash
        })
        clients.save()
        .then(()=>res.status(201).json({message:'client enregistrer'}))
        .catch((error)=>res.status(400).json({error}))
    })
    .catch((error)=>res.status(500).json({error}))
}

//fonction login se connecter
exports.login = (req,res,next)=>{
    Clients.findOne({numero:req.body.numero})
    .then((user)=>{
        if(!user){
            return res.status(400).json({message:'numero incorrect'})
        }
        bcrypt.compare(req.body.password, user.password)
        .then((valid)=>{
            if(!valid){
                return res.status(400).json({message:'password incorrect'})
            }
            res.status(200).json({userId:user._id , token: jwt.sign({
                userId:user._id},`${process.env.RANDOM_TOKEN_SECRET}`,{expiresIn:'24h'}
                )})
        })
        .catch((error)=>res.status(500).json({error}))
    })
    .catch((error)=>res.status(500).json({error}))
}
