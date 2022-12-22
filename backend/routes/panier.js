////Zone d'importaion
const express = require('express');
const router = express.Router();
const panierCtrl = require('../controllers/panier')
const auth = require('../middleware/auth')

router.post('/',auth,panierCtrl.addjPanier);
router.get('/',auth,panierCtrl.readAllPanier);
router.get('/:id',auth,panierCtrl.readOnePanier)
router.delete('/:id',auth,panierCtrl.deletePanier);

//Zone d'exportation
module.exports = router;