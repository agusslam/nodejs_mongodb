const express = require('express')
const routes = express.Router()
const siswaController = require('../Controllers/siswaController.js')

//test monggo
routes.post('/siswa-create', siswaController.createOne)
routes.put('/siswa-update/:id', siswaController.siswaUpdateOne)
routes.get('/siswa-all', siswaController.getAllData)
routes.delete('/siswa-delete/:id', siswaController.delSiswa)
routes.put('/siswa-nested/:id', siswaController.nestedMatpel)
routes.post('/siswa-update-post', siswaController.siswaUpdatePost)

//route for view
routes.get('/', siswaController.siswaView)
routes.post('/post-newSiswa', siswaController.postNewSiswa)
routes.get('/siswa-del/:id', siswaController.delNewSiswa)
routes.get('/siswa-api/:id', siswaController.siswaApi)
routes.get('/siswa-view/:id', siswaController.siswaApi)
routes.post('/siswa-upd/:id', siswaController.siswaUpdOne)


module.exports = routes

