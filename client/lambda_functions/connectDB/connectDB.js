// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const MongoClient = require('mongodb').MongoClient

const mongoURI = process.env.mongoURI
const DB_NAME = 'ReactContactKeeper'

let cachedDb = null

const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  })

  cachedDb = client.db(DB_NAME)

  return cachedDb
}

const queryDatabase = async (db) => {
  const users = await db.collection('users').find({}).toArray()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(users),
  }
}

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false

  const db = await connectionToDatabase(mongoURI)

  return queryDatabase(db)
}
