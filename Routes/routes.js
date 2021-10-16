const express = require('express')
const routes = express.Router()
const siswaControl = require('../Controllers/siswaC')

//route
routes.get('/', siswaControl.ambilData)

module.exports = routes