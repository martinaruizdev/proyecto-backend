const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.json())

const apiRouter = require('./routes/api')
const {connect}= require('./db/connect')


app.use('/api', apiRouter)
connect()


module.exports = app