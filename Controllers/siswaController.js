const siswaModel = require('../Models/siswaModel')

exports.getAllData = (req,res) => {
    siswaModel.find().then(response => {
        res.send({
            message: 'Success get Data',
            result: response
        })
    }).catch(err => {
        res.send({
            message: 'failed get data'
        })
    })
}

exports.createOne = (req,res) => {
    // res.send('tampilan create')
    const siswa = new siswaModel({
        idsiswa : req.body.idsiswa,
        nama : req.body.nama,
        email: req.body.email,
        address: req.body.adress,
        age: req.body.age,
    })

    siswa.save(siswa).then(response => {
        res.send({
            message: 'success create',
            result: response
        })
    }).catch(err => {
        res.send({
            message: 'failed create data'
        })
    })
}

exports.siswaUpdateOne = (req,res) => {
    // console.log(req.params.id)
    siswaModel.updateOne(
        { idsiswa: req.params.id },
        { $set: 
            {
                nama: req.body.nama,
                email: req.body.email,
                address: req.body.address,
                age: req.body.age,
            }},
            {
                upsert: true
            }
    ).then(response => {
        res.send({
            message: 'Successfully Update Data'
        })
    }).catch(err => {
        res.send({
            message: `Failed Update data ${err}`
        })
    })
}

exports.delSiswa = (req,res) => {
    siswaModel.deleteOne(
        {
            idsiswa: req.params.id
        }
    ).then(response => {
        res.send({
            message: "Delete success"
        })
    }).catch(err => {
        res.send({
            message: `Failed Delete ${err}` 
        })
    })
}

exports.nestedMatpel = (req,res) => {
    siswaModel.findOneAndUpdate(
        {
            idsiswa: req.params.id
        },
        {
            $addToSet: {
                matpel: req.body.pelajaran
            }
        }
    ).then(response => {
        res.send({
            message: "Successfuly Nested Matpel"
        })        
    }).catch(response => {
        res.send({
            message: "Failed Nested Matpel"
        })
    })
}

exports.siswaUpdatePost = (req,res) => {
    let data = {
        nama: req.body.nama
    }
    siswaModel.updateOne({idsiswa: req.body.id}, {$set: data})
    .then(response => {
        res.send({
            message: "Successfully Update"
        })
    }).catch(err => {
        res.send({
            message: `Failed Update Data ${err}`
        })
    })
}

exports.siswaView = (req, res) => {
    res.render('index', {
        message:"success get data",
        key: null
    }  )
}

exports.postNewSiswa = (req,res) => {
    // res.send('tampilan create')
    const siswa = new siswaModel({
        idsiswa : req.body.idsiswa,
        nama : req.body.nama,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age,
    })

    siswa.save(siswa).then(response => {
        res.render('index', {message: "Success Add Data"})
    }).catch(err => {
        res.send({
            message: 'failed create data'
        })
    })
}

exports.delNewSiswa = (req,res) => {
    siswaModel.deleteOne(
        {
            idsiswa: req.params.id
        }
    ).then(response => {
        res.render('index', {message: "Success Delete Data"})
    }).catch(err => {
        res.send({
            message: `Failed Delete ${err}` 
        })
    })
}

exports.siswaApi = (req,res) => {
    let id = req.params.id
    siswaModel.findOne(
        {
            idsiswa: req.params.id
        }
    ).then(response => {
        res.render('update', { data: response })        
    }).catch(response => {
        res.send({
            message: "Failed Nested Matpel"
        })
    })
}

exports.siswaViewId = (req,res) => {
    let idData = req.params.id
    res.render('update', { data: response })
}

exports.siswaUpdOne = (req,res) => {
    // console.log(req.params.id)
    siswaModel.updateOne(
        { idsiswa: req.params.id },
        { $set: 
            {
                nama: req.body.nama,
                email: req.body.email,
                address: req.body.address,
                age: req.body.age,
            }},
            {
                upsert: true
            }
    ).then(response => {
        res.render('index', {message: "Success Update Data"})
    }).catch(err => {
        res.send({
            message: `Failed Update data ${err}`
        })
    })
}

exports.siswaSearch = (req,res) => {
    let keySearch = req.body.key
    // console.log(keySearch)
    siswaModel.find(
        {
            nama: { $regex: keySearch }
        }
    ).then(response => {
        res.render('index', 
            {
            message: "search",
            result: response
            }
        )  
    }).catch(err => {
        res.send({
            message: `Failed Get By Key Search ${err}`
        })
    })
}

exports.siswaSearchList = (req,res) => {
    let keySearch = req.body.key
    // console.log(keySearch)
    siswaModel.find(
        {
            nama: { $regex: keySearch }
        }
    ).then(response => {
        res.send({
            message: "success",
            result: response
        })   
    }).catch(err => {
        res.send({
            message: `Failed Get By Key Search ${err}`
        })
    })
}