////Zone d'importaion
const express = require('express');
const router = express.Router();
const panierCtrl = require('../controllers/panier')
const auth = require('../middleware/auth')

router.post('/',panierCtrl.addjPanier);
router.get('/',panierCtrl.readAllPanier);
router.delete('/:id',panierCtrl.deletePanier);

//Zone d'exportation
module.exports = router;