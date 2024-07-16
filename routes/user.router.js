// const multer = require('multer')
const upload = require('../services/uploadFile')
const userRoutes = require('express').Router()

const {userCtrl: { deleteUser, getAllUsers, getOneUser, postUser, putUser , profileCtrl, extractUserInfos }} = require("../controllers")

userRoutes.route("/").post(postUser).get(getAllUsers)
userRoutes.route("/:id").put(putUser).delete(deleteUser)


// let upload = multer({ dest: "upload/" });
userRoutes.post("/profile", upload.single('file'), profileCtrl)

module.exports = userRoutes