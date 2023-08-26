const { ok, created } = require('../helper/response.helper')
const { getNewsQuery } = require('../helper/query.helper')

const { createNewsInDb, getNewsFromDb, updateNewsInDb } = require('../db/news.db')

const getNews = async (req, res) => {
  const query = getNewsQuery(req.query)
  const result = await getNewsFromDb(query)
  return ok(res, { articles: result })
}

const createNews = async (req, res) => {
  const newsArticle = req.body
  const fileName = `public/news/${req.file?.filename}`
  const result = await createNewsInDb({ ...newsArticle, image_url: fileName })
  return created(res, result)
}

const recentNews = async (req, res) => {
  // not needed you can query the getNews with some limit
  return ok(res, { message: 'recent news' })
}

const updateNews = async (req, res) => {
  const id = req.params?.id || -1;
  const body = req.body
  const result = await updateNewsInDb(id, body)
  return ok(res, result)
}

module.exports = {
  getNews,
  createNews,
  recentNews,
  updateNews
}
