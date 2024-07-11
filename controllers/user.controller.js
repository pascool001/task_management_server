const { UserRepo } = require("../db/repository")

const postUser = async (request, response) => {
    const body = request.body;
    let created = await UserRepo.create({...body});
    return response.json(created);
}

const putUser = async (request, response) => {
    const body = request.body;
    const {id} = request.params
    let created = await UserRepo.update(body, id);
    return response.json(created);
}


const getAllUsers = async (request, response) => {
    let List = await UserRepo.getAll()
    return response.json(List)
}

const getOneUser = async (request, response) => {
    let id = request.params.id;
    const TodoData = await UserRepo.findOne({_id: id});
    return response.json( {...TodoData})
}


const deleteUser =  async (request, response) => {
    let id = request.params.id;
    const result = await UserRepo.remove(id)
    return response.json(result)
}


module.exports = {
    postUser,
    getAllUsers,
    getOneUser,
    putUser,
    deleteUser
}

