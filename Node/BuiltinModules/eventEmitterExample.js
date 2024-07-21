//events Module:
// const events = require("events")
// const fs = require("fs")

// const eventEmitter = new events.EventEmitter()

//creating and listening an event
// eventEmitter.on("test",()=>console.log("Test Event is Called"))
// eventEmitter.on("test",()=>console.log("Test Event is Called"))
// eventEmitter.on("test",()=>console.log("Test Event is Called"))
// eventEmitter.on("test",()=>console.log("Test Event is Called"))
// eventEmitter.on("test",()=>console.log("Test Event is Called"))

//firing or calling an event
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")

// const events = require("events")
// const fs = require('fs')
// const eventEmitter = new events.EventEmitter()
// eventEmitter.on("test", () => console.log("Test Event is called"))
// eventEmitter.on("test", () => console.log("Test Event is called"))
// eventEmitter.on("test", () => console.log("Test Event is called"))
// eventEmitter.on("test", () => console.log("Test Event is called"))
// eventEmitter.on("test", () => console.log("Test Event is called"))

// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")


// const events = require('events')
// const fs = require('fs')
// const eventEmitter = new events.EventEmitter()

// eventEmitter.on("test", () => console.log("Hello World 1"))
// eventEmitter.on("test", () => console.log("Hello World 2"))
// eventEmitter.on("test", () => console.log("Hello World 3"))
// eventEmitter.on("test", () => console.log("Hello World 4"))
// eventEmitter.on("test", () => console.log("Hello World 5"))

// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")
// eventEmitter.emit("test")

// const events = require('events')
// const fs = require('fs')
// const eventEmitter = new events.EventEmitter()

// eventEmitter.on("name",(name)=>console.log(`Name event is fired and value of name is '${name}'`))
// eventEmitter.emit("name","Nitin Chauhan")

// const events = require('events')
// const fs = require('fs')
// const eventEmitter = new events.EventEmitter()

// eventEmitter.on("name", (name) => console.log(`Name Event is fired and value of name is '${name}'`))
// eventEmitter.emit("name", "Jeet Mahaur")

// const events = require('events')
// const fs = require('fs')
// const eventEmitter = new events.EventEmitter()

// eventEmitter.on("name", (name) => console.log(`Name is event is fired and value of name is '${name}'`))
// eventEmitter.emit("name", "Shreya Verma")



// eventEmitter.on("data", (data) => {
//     console.log(data)
// })

// eventEmitter.emit("data", [
//     { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//     { id: 1002, name: "Deepak Singh", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//     { id: 1003, name: "Deepak Gupta", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//     { id: 1004, name: "Satyam Dixit", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" },
//     { id: 1005, name: "Mamta Jain", dsg: "Trainer", salary: 135800, city: "Noida", state: "UP" }
// ])

// eventEmitter.on("data", (data) => {
//     console.log(data)
// })

// const events = require('events')
// const eventEmitter = new events.EventEmitter()

// eventEmitter.on("data", (data) => {
//     console.log(data);
// })

// eventEmitter.emit("data", [
//     { id: 1001, name: "Jeet Mahaur", dsg: "Developer", salary: 135800, city: "Noida" },
//     { id: 1002, name: "Shreya Verma", dsg: "Developer", salary: 135800, city: "Noida" },
//     { id: 1003, name: "Riya Gaur", dsg: "Developer", salary: 135800, city: "Noida" },
//     { id: 1004, name: "Pihu Mahaur", dsg: "Developer", salary: 135800, city: "Noida" },
// ])

// const events = require('events')
// const eventEmitter = new events.EventEmitter()

// eventEmitter.on("data", (data) => {
//     console.log(data);
// })

// eventEmitter.emit("data", [
//     { id: 1001, name: "Jeet Mahaur", dsg: "Developer", salary: 135800, city: "Noida" },
//     { id: 1002, name: "Shreya Verma", dsg: "Developer", salary: 135800, city: "Noida" },
//     { id: 1003, name: "Riya Gaur", dsg: "Developer", salary: 135800, city: "Noida" },
//     { id: 1004, name: "Pihu Mahaur", dsg: "Developer", salary: 135800, city: "Noida" },
//     { id: 1005, name: "Priya Mahaur", dsg: "Developer", salary: 135800, city: "Noida" },
// ])

// const data = fs.readFileSync("data.json", "utf-8")
// eventEmitter.emit("data", JSON.parse(data))

// const events = require('events')
// const fs = require('fs')
// const eventEmitter = new events.EventEmitter()

// const data = fs.readFileSync("data.json", 'utf-8')
// eventEmitter.emit("data", JSON.parse(data));

// Done