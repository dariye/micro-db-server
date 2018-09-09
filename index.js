const { json, send } = require('micro')
const jsonfile = require('jsonfile')
const { parse } = require('url')

const DATABASE_FILE_PATH = './db/data.json'
let db = jsonfile.readFileSync(DATABASE_FILE_PATH)

module.exports = async (req, res) => {
  const { url } = req
  const { pathname, query } = parse(url)
  const [key, value] = query ? query.split('=') : []

  switch(pathname) {
    case '/set':
      db[key] = value
      jsonfile.writeFileSync(DATABASE_FILE_PATH, db)
      db = jsonfile.readFileSync(DATABASE_FILE_PATH)
      send(res, 200, db)
      break;
    case '/get':
      if (!Object.keys(db).includes(key)) {
        send(res, 404)
      } else {
        send(res, 200, db[key])
      }
      break;
    default:
      send(res, 200, db)
  }
}
