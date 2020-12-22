const db = require('../models')
const fs = require('fs')
const { File } = db

let fileController = {
  downloadFile: (req, res) => {
    console.log('download file')
    const file = `${__dirname}/../upload/file/AlphaCamp.pdf`;

    let binaryData = fs.readFileSync(file)

    console.log('binaryData', binaryData.length)

    let base64Sring = new Buffer.from(binaryData).toString("base64")

    res.json(base64Sring)

    console.log(base64Sring, 'buf')

    let buff = new Buffer.from(base64Sring, 'base64')
    console.log(fs.writeFileSync('stack-abuse-logo-out.png', buff), 'read')

    // let blob = new Blob([file], { type: 'application/pdf' })
    // console.log(blob, 'blob')

    // var stream = fs.createReadStream(file);//引數是圖片資源路徑
    // var responseData = [];//儲存檔案流
    // if (stream) {//判斷狀態
    //   stream.on('data', function (chunk) {
    //     responseData.push(chunk);
    //   });
    //   stream.on('end', function () {
    //     var finalData = Buffer.concat(responseData);
    //     console.log('finalData', finalData)
    //     res.write(finalData);
    //     //第一個引數是下載下來要存放的位置，第二個引數是圖片資料（二進位制的），第三個引數必須要binary，第四個是回撥函式
    //     // fs.writeFile("", finalData, "binary", function (err) {
    //     //   if (err) {
    //     //     console.log("下載失敗");
    //     //   }
    //     //   console.log("下載成功");
    //     // });
    //     res.json(finalData);
    //   });
    // }




    // res.download(file);

    // const fileId = req.params.file_id

    // File.find({
    //   where: {
    //     id: fileId
    //   },
    // }).then(file => {
    //   return res.json(file)
    // })


  }

}


module.exports = fileController