require('dotenv').config()
const express = require('express')
const connectDB = require('./db')
const path = require('path')
const app = express()

// Connect DB
connectDB()

// Init Middleware
app.use(express.json())

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

// Server static assets in productions
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  )
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
