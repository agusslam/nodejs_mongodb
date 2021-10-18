//mEMBUAT Node JS
const http = require("http")
const fs = require("fs")
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 8002
const app = express()
const routes = require('./Routes/routes')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)
app.use(morgan('dev'))
app.set('view engine', 'ejs')

app.use('/', express.static('public'));

app.listen(port, () => { console.log(`Server ready on ${port}`) })

//models
const ConnectionMongoDB = require('./Models/Connection')
ConnectionMongoDB()