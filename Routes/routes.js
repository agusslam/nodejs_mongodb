const express = require('express')
const routes = express.Router()
const siswaController = require('../Controllers/siswaController.js')

//test monggo
routes.post('/siswa-create', siswaController.createOne)
routes.put('/siswa-update/:id', siswaController.siswaUpdateOne)
routes.get('/siswa-all', siswaController.getAllData)
routes.delete('/siswa-delete/:id', siswaController.delSiswa)
routes.put('/siswa-nested/:id', siswaController.nestedMatpel)

module.exports = routes

