// const fs = require("fs")
// const http = require("http")

// const server = http.createServer((req, res) => {
//     if (req.url == "/")
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == "/data") {
//         let stream = fs.createReadStream("./data2.json", "utf-8")
//         stream.on("data",(chunk)=>{
//             res.write(chunk)
//         })
//         stream.on("end",()=>{
//             res.end("No More Data to Read")
//         })
//         stream.on("error",(error)=>{
//             console.log(error)
//             res.writeHead(500)
//             res.end("Internal Server Error")
//         })
//     }
//     else {
//         res.writeHead(404)
//         res.end("404!!! Page Not Found")
//     }
// })
// server.listen(8000,console.log("Server is Running @ http://localhost:8000"))

const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url == "/")
        res.end("<h1>This is Home Page</h1>")
    else if (req.url == "/data") {
        let stream = fs.createReadStream("./data2.json", "utf-8")
        stream.pipe(res)
    }
    else {
        res.writeHead(404)
        res.end("404!!! Page Not Found")
    }
})
server.listen(8000,console.log("Server is Running @ http://localhost:8000"))