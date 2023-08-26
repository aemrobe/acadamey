const statusCode = require('../constants/status-code.constant');

function ok(res, body) {
    res.status(statusCode.OK);
    return res.send(body);
}

function created(res, body) {
    res.status(statusCode.CREATED);
    return res.send(body)
}

function badRequest(res, error) {
    res.status(statusCode.BAD_REQUEST);
    return res.send(error)
}

module.exports = {
    ok,
    created,
    badRequest
}