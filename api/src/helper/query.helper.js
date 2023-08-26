const getNewsQuery = (query) => {
    let result = { }
    result.search = query.search ?? '';
    result.itemsPerPage = query.limit ?? 10;
    result.page = query.page ? (query.page - 1) * result.itemsPerPage : 0
    result.category = query.category ?? ''
    return result;
}

const getUserQuery = (query) => {
    let result = { }
    result.itemsPerPage = query.limit ?? 10;
    result.page = query.page ? (query.page - 1) * result.itemsPerPage : 0
    result.club = query.club ?? ''
    return result;
}

module.exports = {
    getNewsQuery,
    getUserQuery
}