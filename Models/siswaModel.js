const Mongoose = require('mongoose')

//ini untuk require String
const reqString = {
    type: String,
    required: true,
}

//ini schema untuk nested matpel
const matPel = Mongoose.Schema(
    {
        pelajaran: reqString,
        nilai: { type:String},
    }    
)

var Schema = new Mongoose.Schema(
    {
    idsiswa: reqString,
    nama: { type:String},
    email: { type:String},
    address: { type:String},
    age: { type:String},
    matpel: [String]
    }
)

//nama database
const Schools = Mongoose.model('siswa', Schema)

module.exports = Schools
