const AuthRouter = require('express').Router()
const {secuCtrl: {login, register, Activation, logout}} = require("../controllers")
 
AuthRouter.post("/login", login)
AuthRouter.post("/register", register);
AuthRouter.post("/activation", Activation);
AuthRouter.post("/logout", logout);



module.exports = AuthRouter






