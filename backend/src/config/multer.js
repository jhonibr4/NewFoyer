const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'public', 'fotoperfil'),
    storage: multer.diskStorage({
        destination: (req , res , cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'public', 'fotoperfil'));
        },
        filename: ( request , file , cb ) => {
            
            cb(null, Date.now() + '-' + file.originalname)
        }
    }),
    fileFilter: ( request , file, cb ) =>{
        const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
        ];
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
            (new Error("Invalid file type."))
        }
    }
}