const express = require("express")
const multer = require("multer")
const excelToJson = require("convert-excel-to-json")
const fs = require("fs-extra")
const readXlsxFile = require('read-excel-file/node')


const app = express();
const port = 5062

app.get('/data', async (req, res) => {
    await readXlsxFile("C:/Users/IP3 GAMING/Desktop/ALL PRODUCTS.xlsx").then((rows) => {
        console.log(rows);
        return rows
    })
    readXlsxFile
})

app.get('/datastream', async (req, res) => {
    await readXlsxFile(fs.createReadStream("C:/Users/IP3 GAMING/Desktop/ALL PRODUCTS.xlsx")).then((rows) => {
        console.log(rows);
        return rows
    })
    readXlsxFile
})


// const upload = multer({ dest: "upload/" })
// app.post("/read", upload.single("file"), (req, res) => {
//     try {
//         if (req.file?.filename == null || req.file?.filename == "undefiend") {
//             res.status(400).json("no file")

//         } else {
//             const filePath = "upload" + req.filename
//             const excelData = excelToJson({
//                 courceFile: filePath,
//                 header: {
//                     rows: 1,
//                 },
//                 columnToKey: {
//                     "*": "{{columnHeader}}",
//                 },
//             });
//             // fs.remove(filePath)
//             // res.status(200).json(excelData)
//         }
//     } catch (error) {
//         res.status(500)
//     }
// })





app.listen(port, () => {
    console.log("server is runnning");
})