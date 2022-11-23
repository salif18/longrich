////Zone d'importaion
const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients')

router.post('/signup',clientsCtrl.signup);
router.post('/login',clientsCtrl.login);

//Zone d'exportation
module.exports = router;