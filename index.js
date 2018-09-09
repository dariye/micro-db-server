const { json, send } = require('micro')
module.exports = async (req, res) => {
  return send(res, 200, req.url)
}
