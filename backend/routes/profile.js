////Zone d'importaion
const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profile')
const authentification = require('../middleware/auth')

router.post('/',profileCtrl.creadProfile);
router.get('/',profileCtrl.readAllProfile);
router.get('/:id',profileCtrl.readOneProfile);
router.put('/:id',profileCtrl.updateProfile);
router.delete('/:id',profileCtrl.deleteProfile);

//Zone d'exportation
module.exports = router;