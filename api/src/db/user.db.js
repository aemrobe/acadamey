const { getConnection } = require('./connection');
const dbConfig = require('../config/db.config');


const getCollection = async () => {
    const db = await getConnection();
    let collection = await db.collection(dbConfig.userCollectionName);
    return collection;
}

const getUsersFromDb = async (query) => {
    const collection = await getCollection();
    let findQuery = {}
    if(query.club) {
        findQuery = { club: query.club };
    }
    let result = await collection.find(findQuery);
    if(query.page)
    {
        result = result.skip(query.page);
    }
    if(query.itemsPerPage)
    {
        result = result.limit(parseInt(query.itemsPerPage));
    }
    return result.toArray();
}

const createUserInDb = async (event) => {
    let collection = await getCollection()
    let result = await collection.insertOne(event)
    return result;
}

const getUserFromDb = async (username, password) => {
    const collection = await getCollection();
    let result = await collection.findOne({username: username, password: password});
    return result;
}


module.exports = {
    getUsersFromDb,
    createUserInDb,
    getUserFromDb
}