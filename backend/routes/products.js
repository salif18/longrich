//Zone d'importaion
const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/products')
const auth = require('../middleware/auth')

router.post('/',productCtrl.creadProd);
router.get('/',productCtrl.readAllProd);
router.get('/:id',productCtrl.readOneProd);
router.put('/:id',productCtrl.updateProd);
router.delete('/:id',productCtrl.deleteProd);

//Zone d'exportation
module.exports = router;