const taskRoutes = require('express').Router()

const {TaskCtrl: { deleteTask, getAllTasks, getOneTask, postTask, putTask , deleteManyTask, getOwnerTasks }} = require("../controllers")

const authenticate = require("../middlewares/authenticate")

// taskRoutes.use(authenticate)
taskRoutes.route("/").post(postTask).get(getAllTasks)
taskRoutes.route("/owner/:ownerid").get(getOwnerTasks)
taskRoutes.route("/:id").put(putTask).delete(deleteTask)
taskRoutes.route("/delete-many").post(deleteManyTask)

module.exports = taskRoutes