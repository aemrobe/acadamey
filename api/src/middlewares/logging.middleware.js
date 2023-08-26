function logging(req, res, next) {
    console.log(`[${req.url}] - ${new Date().toLocaleString()}`)
    return next();
}

module.exports = {
    logging
}