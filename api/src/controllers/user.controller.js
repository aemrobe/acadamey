const { ok, created, badRequest } = require('../helper/response.helper')
const { getUserQuery } = require('../helper/query.helper')
const { getUsersFromDb, createUserInDb, getUserFromDb } = require('../db/user.db')

const getUsers = async (req, res) => {
    const query = getUserQuery(req.query);
    const result = await getUsersFromDb(query);
    return ok(res, {users: result})
}

const createUser = async (req, res) => {
    const body = req.body;
    const fileName = `/public/avatar/${req.file.filename}`;

    const result = await createUserInDb({
        ...body,
        avatar_url: fileName
    })
    return created(res, result)
}

const login = async (req, res) => {
    const user = req.body;
    if(user.username && user.password) {
        const userExists = await getUserFromDb(user.username, user.password);
        if(userExists) {
            return ok(res, {'message': "Valid User"})
        }
    }
    return badRequest(res, {'error': "Please provide valid username and password"})
}

module.exports = {
  createUser,
  getUsers,
  login
}
