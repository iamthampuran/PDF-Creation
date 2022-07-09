require('./config/db')
const express = require('express')
const router = require('./routes')


const app = express()
app.use(express.json())
app.use(router)
const bodyParser = require('express').json
app.use(bodyParser())
//const BillRouter = require('./api/bill')

//app.use('/bill',BillRouter)

app.listen(3001, () => console.log('Server running on port 3001'))
