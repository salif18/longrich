//importation du module multer
const multer = require('multer');

//config extenxion
const MIME_TYPES = {
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png'
}

//config de diskStorage
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'images')
    },
    filename:(req, file ,callback)=>{
        const name = file.originalname.split('').join('_')
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now()+ '.' + extension)
    }
})

module.exports = multer({storage : storage}).single('image')