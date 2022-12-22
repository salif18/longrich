//Zone d'importation
const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/products')
const auth = require('../middleware/auth');
const multer = require('../middleware/multer')

router.post('/',auth,productCtrl.creadProd);
router.get('/',auth,productCtrl.readAllProd);
router.get('/:id',auth,productCtrl.readOneProd);
router.put('/:id',auth,productCtrl.updateProd);
router.delete('/:id',auth,productCtrl.deleteProd);

//Zone d'exportation
module.exports = router;