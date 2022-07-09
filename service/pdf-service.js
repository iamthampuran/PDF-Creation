const PDFDocument = require('pdfkit');
const fs = require('fs');
const num1 = require('./../model/inc')
var c 

num1.find({}).then(data =>{
    c = data[0].num
    console.log("Data = ",data)
})

function build_pdf(dataCallback, endCallback,str1,name){
    const doc = new PDFDocument();
    /*value = 50000
    str = 'This is the fee reimbursement of $'+value+' on sample present in NIT Calicut, lead by AST'*/
    var d = new Date()
   
    doc.on('data',dataCallback)
    doc.on('end',endCallback)
    doc
    .font('Times-Roman')
    .fontSize(25)
    .text('Fee Reimbursement', 100, 100);

    doc.image('service/images.jpg', {
        fit: [300, 300],
        align: 'centre',
        valign: 'right'
      });

      doc
      .font('Times-Roman')
      .fontSize(15)
      .text("MITS|R&C|"+d.getFullYear()+"|"+c,400,100)
      data = {"num": c}
      num1.findOneAndUpdate({num:c},{
        
          "num": ++c
        
      }).then(result =>{
        console.log(result)
      })
      
      
    
      doc
      .font('Times-Roman')
      .fontSize(20)
      .text(str1,100, 300);
      
      doc
      .font('Times-Roman')
      .fontSize(20)
      .text("Facult in charge: "+name,300, 400);


    doc.end()

}

module.exports = {build_pdf}