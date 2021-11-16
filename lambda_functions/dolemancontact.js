const MongoClient = require('mongodb').MongoClient
const jwt = require('jsonwebtoken')
const config = require('config')

const mongoURI = process.env.MONGO_URI
const DB_NAME = 'contactkeeper'

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
  const doleman = await db.collection('doleman').find({}).toArray()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dolemen),
  }
}

module.exports.handler = async (event, context, req, res, next) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false

  const db = await connectionToDatabase(mongoURI)

  return queryDatabase(db)
}
