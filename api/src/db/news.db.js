const { getConnection } = require('./connection');
const dbConfig = require('../config/db.config');
const { ObjectId } = require('mongodb');


const getCollection = async () => {
    const db = await getConnection();
    let collection = await db.collection(dbConfig.newsCollectionName);
    return collection;
}

const getNewsFromDb = async (query) => {
    const collection = await getCollection();
    let findQuery = {}
    if( query.search ) {
        findQuery = {'name':new RegExp(query.search)}
    }
    if( query.category) {
        findQuery = {...findQuery, 'category': query.category}
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
const createNewsInDb = async (article) => {
    let collection = await getCollection()
    let result = await collection.insertOne(article)
    return result;
}

const updateNewsInDb = async (id, newValues) => {
    const collection = await getCollection();
    let result = await collection.updateOne(
        {_id: ObjectId(id)},
        {$set: newValues }
    )
    return result;
}

module.exports = {
    createNewsInDb,
    getNewsFromDb,
    updateNewsInDb
}