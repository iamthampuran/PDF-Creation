const PDFDocument = require('pdfkit');
const fs = require('fs');


function build_pdf(dataCallback, endCallback,str1){
    const doc = new PDFDocument();
    value = 50000
    str = 'This is the fee reimbursement of $'+value+' on sample present in NIT Calicut, lead by AST'
    doc.on('data',dataCallback)
    doc.on('end',endCallback)
    doc
    .font('Times-Roman')
    .fontSize(25)
    .text('Fee Reimbursement', 100, 100);

    doc.image('service/images.jpg', {
        fit: [250, 300],
        align: 'top-right',
        valign: 'right'
      });
    
      doc
      .font('Times-Roman')
      .fontSize(20)
      .text(str1,100, 300);


    doc.end()

}

module.exports = {build_pdf}