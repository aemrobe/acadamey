const dbConfig = {
    connectionString: "mongodb://localhost:27017/",
    databaseName: 'sports_academy',
    newsCollectionName: 'news',
    eventCollectionName: 'event',
    userCollectionName: 'user',
    coachCollectionName: 'coach',
}

module.exports = dbConfig;