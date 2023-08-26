const { getConnection } = require('./connection');
const dbConfig = require('../config/db.config');
const { ObjectId } = require('mongodb');


const getCollection = async () => {
    const db = await getConnection();
    let collection = await db.collection(dbConfig.eventCollectionName);
    return collection;
}

const getEventsFromDb = async (query) => {
    const collection = await getCollection();
    let findQuery = {}
    let result = await collection.find(findQuery);
    if(query.page)
    {
        result = result.skip(query.page);
    }
    if(query.limit)
    {
        result = result.limit(parseInt(query.limit));
    }
    return result.toArray();
}

const createEventInDb = async (event) => {
    let collection = await getCollection()
    let result = await collection.insertOne(event)
    return result;
}


module.exports = {
    createEventInDb,
    getEventsFromDb
}