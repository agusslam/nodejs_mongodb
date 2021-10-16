//deklarasi include modules
const express = require('express')
const cors = require('cors')
//definisi app
const app = express()
const port = 8002

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(port, () => {console.log(`Server is running on port ${port}`)})
