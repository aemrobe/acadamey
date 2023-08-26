const { created, ok} = require('../helper/response.helper');
const {createEventInDb, getEventsFromDb} = require('../db/event.db');

const createEvent = async (req, res) => {
    const event = req.body;
    const result = await createEventInDb(event)
    return created(res, result);
}

const getEvents = async (req, res) => {
    const limit = req.query.limit;
    const result = await getEventsFromDb({limit});
    return ok(res, {events: result});
}

module.exports = {
    createEvent,
    getEvents
}