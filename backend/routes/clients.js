////Zone d'importaion
const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients')
const auth = require('../middleware/auth')
router.post('/signup',clientsCtrl.signup);
router.post('/login',clientsCtrl.login);
router.get('/profil/:id',auth,clientsCtrl.getUser)
//Zone d'exportation
module.exports = router;