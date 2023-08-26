const { MongoClient } = require('mongodb');
const dbConfig = require('../config/db.config');

const connectionString = dbConfig.connectionString;

const client = new MongoClient(connectionString);


const getConnection = async () => {
    let connection;
    try{
        connection = await client.connect();
    } catch(e) {
        console.error(e);
    }
    let db = connection.db(dbConfig.databaseName)
    return db;
}

module.exports = {
    getConnection
}