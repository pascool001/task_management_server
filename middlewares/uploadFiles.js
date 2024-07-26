const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destination = __basedir + "/uploads/"
    console.log('image destinaion: ', destination)
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    console.log('Filename: ', file.originalname)
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage
}).single("file");
// limits: { fileSize: maxSize },

// let uploadFileMiddleware = util.promisify(uploadFile);
// module.exports = uploadFileMiddleware;
module.exports = uploadFile;
