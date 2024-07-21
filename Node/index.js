// console.log("Hello World")

/*
Modules :
-> JavaScript modules allow you to break up your code into separate files.
-> This makes it easier to maintain a code-base.
-> Modules are imported from external files with the import statement.

Types of Modules:
1. User Defined Modules or Local Modules
2. Core Modules or Builtin Modules 
    eg. fs,path,os,http,event etc
3. Third Party Modules 
    eg. express,password-validator,nodemailer,multer,cors,dotenv,jsonwebtoken etc

Module Types on Basis of Export Import
1. CJS (Common Javascript Modules) : "require" used to import a module
2. MJS (Modern Javascript Modules or Module Javascript) : "import" used to import the Module

Note : bydefault node support cjs so to use mjs we have to define {"type":"module"} in package.json file
*/


//Using CJS

// const name = require("./userDefineModules/test1")
// console.log(name);

// const name = require("./userDefineModules/test1")
// console.log(name);

// const num = require("./userDefineModules/test1")
// console.log(num);

// const arr = require("./userDefineModules/test1")
// console.log(arr);

// const data = require("./userDefineModules/test1")
// console.log("Name", data[0])
// console.log("Array", data[1])
// console.log("Emplyoee", data[2])
// data[3]()
// var obj = new data[4]
// obj.show()

// const data = require("./userdefinedModules/test1")
// console.log("Name : ",data.name)
// console.log("Array : ",data.arr)
// console.log("Employee : ",data.emp)
// data.fun()
// var obj = new data.Example()
// obj.show()

// const {name,Example,emp,arr,fun} = require("./userdefinedModules/test1")
// console.log("Name : ",name)
// console.log("Array : ",arr)
// console.log("Employee : ",emp)
// fun()
// var obj = new Example()
// obj.show()

// const { Example } = require("./userdefinedModules/test1")
// var obj = new Example()
// obj.show()

//Using MJS

// import name from "./userdefinedModules/test2.mjs"
// console.log(name)

// import name from './userDefineModules/test2.mjs'
// console.log(name);

// import num from './userDefineModules/test2.mjs'
// console.log(num);

// import * as Data from "./userdefinedModules/test2.mjs"
// var obj = new Data.default()
// obj.show()

// console.log(Data.name)
// console.log(Data.arr)
// console.log(Data.emp)
// Data.display()

// import * as Data from './userDefineModules/test2.mjs'
// var obj = new Data.default()
// obj.show()
// console.log(Data.name)
// console.log(Data.arr)
// console.log(Data.emp)
// Data.dis()

// import Example, { name, arr, emp, display } from "./userdefinedModules/test2.mjs"
// var obj = new Example()
// obj.show()

// console.log(name)
// console.log(arr)
// console.log(emp)
// display()

// import Example, { name, arr, emp, dis } from "./userDefineModules/test2.mjs";
// var obj = new Example()
// obj.show()
// console.log(name);
// console.log(arr);
// console.log(emp);
// dis()

// import Example, { name, arr, emp, dis } from './userDefineModules/test2.mjs'
// var obj = new Example()
// obj.show()
// console.log(name);
// console.log(arr);
// console.log(emp);
// dis(); 


//Core Modules
// require("./BuiltinModules/fsModuleSync")
// require("./BuiltinModules/fsModuleAsync")
// require("./BuiltinModules/UsingOSModule")
// require("./BuiltinModules/usingPathModule")

//Third Party Modules
// var passwordValidator = require('password-validator')
// var schema = new passwordValidator();

// Add properties to it
// schema
// .is().min(8)                                     // Minimum length 8
// .is().max(50)                                    // Maximum length 50
// .has().uppercase(1)                              // Must have at least 1 uppercase letters
// .has().lowercase(1)                              // Must have at least 1 lowercase letters
// .has().digits(1)                                 // Must have at least 1 digits
// .has().not().spaces()                            // Should not have spaces
// .is().not().oneOf(['Passw0rd', 'Password123']);  // Blacklist these values

// console.log(schema.validate("nitin@123"))
// console.log(schema.validate("NITIN@123"))
// console.log(schema.validate("Nitin123"))
// console.log(schema.validate("Nitin 123"))
// console.log(schema.validate("Password123"))

// var passwordValidator = require('password-validator')
// var schema = new passwordValidator();
// schema
//     .is().min(8)
//     .is().max(50)
//     .has().uppercase(1)
//     .has().lowercase(1)
//     .has().digits(1)
//     .has().not().spaces()
//     .is().not().oneOf(['Passw0rd', 'Password123']);
// console.log(schema.validate("jeet@123"))
// console.log(schema.validate("JEET@123"))
// console.log(schema.validate("Jeet123"))
// console.log(schema.validate("Jeet 123"))
// console.log(schema.validate("Password123"))

// var passwordValidator = require('password-validator')
// var schema = new passwordValidator();
// schema
//     .is().min(8)
//     .is().max(50)
//     .has().uppercase(1)
//     .has().lowercase(1)
//     .has().digits(1)
//     .has().not().spaces()
//     .is().not().oneOf(['Passw0rd', 'Password123'])
// console.log(schema.validate("riya@123"));
// console.log(schema.validate("JEET@123"));
// console.log(schema.validate("riya123"));
// console.log(schema.validate("jeet 123"));
// console.log(schema.validate("Password123"));
// console.log(schema.validate("Jeet@123"));

//Server using http core module
// const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.write("<h1>Hello World1</h1>")
//     res.write("<h1>Hello World2</h1>")
//     res.write("<h1>Hello World3</h1>")
//     res.write("<h1>Hello World4</h1>")
//     res.end("<h1>Hello From Server</h1>")
// })

// server.listen(8000,console.log("Server is Running at http://localhost:8000"))

// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.write("<h1>Hello Jeet</h1>")
//     res.end("<h1>Hello From Server</h1>")
// })
// server.listen(8000, console.log("Servre is runnning port https://localhost:8000"))

// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.write("<h1>Hello Jeet</h1>")
//     res.write("<h1>Hello Riya</h1>")
//     res.end("<h1>Hello From Server</h1>")
// })
// server.listen(8000, console.log("Server is running on port https://localhost:8000"))


//Routing in Node JS
// const http = require("http")

// const server = http.createServer((req, res) => {
//     if (req.url == "/")
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == "/about")
//         res.end("<h1>This is About Page</h1>")
//     else if (req.url == "/profile")
//         res.end("<h1>This is Profile Page</h1>")
//     else if (req.url == "/contact")
//         res.end("<h1>This is Contact Page</h1>")
//     else{
//         res.writeHead(404)
//         res.end("<h1>404! Page Not Found</h1>")
//     }
// })

// server.listen(8000, console.log("Server is Running at http://localhost:8000"))

// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url == '/')
//         res.end("<h1>This is a Home Page</h1>")
//     else if (req.url == '/about')
//         res.end("<h1>This is About Page</h1>")
//     else if (req.url == '/profile')
//         res.end("<h1>This is Profile Page</h1>")
//     else if (req.url == '/contact')
//         res.end("<h1>This is Contact Page</h1>")
//     else if (req.url == '/service')
//         res.end("<h1>This is Service Page</h1>")
//     else {
//         res.writeHead(404)
//         res.end("<h1>404! Page Not Found</h1>")
//     }
// })

// server.listen(8000, console.log("Server is Running at http://localhost:8000"))

// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url == "/")
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == "/about")
//         res.end("<h1>This is About Page</h1>")
//     else if (req.url == "/service")
//         res.end("<h1>This is Service Page</h1>")
//     else {
//         res.writeHead(404)
//         res.end("<h1>404! Page Not Found</h1>")
//     }
// })

// server.listen(8000, console.log("Server is running at http://localhost:8000"))



//Serving json data from server
// const http = require("http")

// const server = http.createServer((req, res) => {
//     if (req.url == "/")
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == "/data") {
//         let data = [
//             { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//             { id: 1002, name: "Deepak Singh", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//             { id: 1003, name: "Deepak Gupta", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//             { id: 1004, name: "Satyam Dixit", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//             { id: 1005, name: "Mamta Jain", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" }
//         ]
//         res.end(JSON.stringify(data))
//     }
//     else {
//         res.writeHead(404)
//         res.end("<h1>404! Page Not Found</h1>")
//     }
// })
// server.listen(8000, console.log("Server is Running at http://localhost:8000"))

// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url == "/")
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == '/data') {
//         let data = [
//             { id: 1001, name: "Jeet Mahaur", dsg: "Developer", city: "Noida" },
//             { id: 1002, name: "Shreya Verma", dsg: "Developer", city: "Noida" },
//             { id: 1003, name: "Riya Gaur", dsg: "Developer", city: "Noida" },
//             { id: 1004, name: "Moni Saxena", dsg: "Developer", city: "Noida" },
//         ]
//         res.end(JSON.stringify(data))
//     }
//     else {
//         res.write(404)
//         res.end("404!!! page is not found")
//     }
// })

// server.listen(8000, console.log("Server running at http://localhost:8000"));

// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url == '/')
//         res.end("<h1>This is Home Page</h1>")

//     else if (req.url == '/data') {
//         let data = [
//             { id: 1001, name: "Jeet Mahaur", dsg: "Developer", city: "Noida" },
//             { id: 1002, name: "Shreya Verma", dsg: "Developer", city: "Noida" },
//             { id: 1003, name: "Riya Gaur", dsg: "Developer", city: "Noida" },
//             { id: 1004, name: "Moni Saxena", dsg: "Developer", city: "Noida" },
//             { id: 1005, name: "Priya Mahor", dsg: "Developer", city: "Noida" },
//             { id: 1006, name: "Pihu Mahaur", dsg: "Developer", city: "Noida" },
//         ]
//         res.end(JSON.stringify(data))
//     }
//     else {
//         res.writeHead(404)
//         res.end("404!!! page is not found")
//     }
// })

// server.listen(8000, console.log("Server is running at http://localhost:8000"));


// const http = require("http")
// const fs = require("fs")
// const server = http.createServer((req, res) => {
//     if (req.url == "/")
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == "/data") {
//         let data = fs.readFileSync("data.json", "utf-8")
//         res.end(data)
//     }
//     else {
//         res.writeHead(404)
//         res.end("<h1>404! Page Not Found</h1>")
//     }
// })
// server.listen(8000, console.log("Server is Running at http://localhost:8000"))


// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req, res) => {
//     if (req.url == '/')
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == '/data') {
//         let data = fs.readFileSync("data.json", "utf-8")
//         res.end(data)
//     }
//     else {
//         res.writeHead(404)
//         res.end("<h1>404! Page Not Found</h1>")
//     }
// })
// server.listen(8000, console.log("Server i running at http://localhost:8000"))

// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req, res) => {
//     if (req.url == "/")
//         res.end("<h1>This is Home Page</h1>")
//     else if (req.url == '/data') {
//         let data = fs.readFileSync("data.json", 'utf-8')
//         res.end(data)
//     }
//     else {
//         res.writeHead(404)
//         res.end("<h1>404! Page not found</h1>")
//     }
// })
// server.listen(8000, console.log("Server is runnong at http://localhost:8000"))

//using events Module
// require("./BuiltinModules/eventEmitterExample")


//stream example
// require("./streamExample")
