const express = require('express')
const pdfService = require('./../service/pdf-service')
const Reinbursement = require('../model/User')

const router = express.Router()
router.get('/invoice',(req,res,next) =>{
    const stream = res.writeHead(200,{
        'Content-Type': 'application/pdf',
        'Content-Dispositon': 'attachment;filename = invoice.pdf'
    })
    let {name,year,totalfee,from} = req.body
    console.log(req.body)
    name = name
    year = year
    totalfee = totalfee
    from = from
    reinbursed = (parseInt(totalfee)*50)/100
    const str = "An amount of Rs"+reinbursed+" is to be reinbursed for the event conducted by "+from+" on "+year+" to "+name
    pdfService.build_pdf(
        (chunk) => stream.write(chunk),
        () => stream.end(),
        str
    )
})

module.exports = router