const { ok, created } = require('../helper/response.helper')
const { getUserQuery } = require('../helper/query.helper')
const { getCoachesFromDb, createCoachInDb } = require('../db/coach.db')

const getCoaches = async (req, res) => {
  const query = getUserQuery(req.query)
  const result = await getCoachesFromDb(query)
  return ok(res, { data: result })
}

const createCoach = async (req, res) => {
  const body = req.body;
  const fileName = `/public/avatar/${req.file.filename}`;
  const result = await createCoachInDb({
    ...body,
    avatar_url: fileName
  });
  return created(res, result)
}

module.exports = {
    getCoaches,
    createCoach
}
