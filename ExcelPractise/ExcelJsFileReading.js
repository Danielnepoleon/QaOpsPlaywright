const exceljs = require('exceljs');

async function readExcelFile() {
const workbook = new exceljs.Workbook();
await  workbook.xlsx.readFile('ExcelPractise\\ExcelPractise.xlsx')
const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
        console.log(`Row ${rowNumber}, Column ${colNumber}: ${cell.value}`);
    });
})
}

readExcelFile()