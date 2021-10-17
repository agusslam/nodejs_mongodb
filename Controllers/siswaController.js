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