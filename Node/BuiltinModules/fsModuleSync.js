/*
fs module : used to perform operations regarding file handling
file Handling/file Input Output Operations:
    1. Creating a new File or Folder
    2. Writing Data into a file
    3. Appending Data into a file
    4. Reading Data from a file
    5. Rename a file
    6. Delete a file
    7. Delete a folder
 */

// const fs = require('fs')

//mkdirSync() : used to create a folder in Sync Mode,if folder already exist it throw an exception

// try {
//     fs.mkdirSync("test")
//     console.log("Folder is Created!!!")
// } catch (error) {
//     if (error.code === "ENOENT")
//         console.log("Path is Invalid")
//     else
//         console.log("Folder is Already Exist")
// }

// const fs = require('fs')
// try {
//     fs.mkdirSync("test")
//     console.log("Folder is created!!!")
// } catch (error) {
//     if (error.code === "ENOENT")
//         console.log("Path is Invaild")
//     else
//         console.log("Folder is already Exist")
// }

// const fs = require('fs')
// try {
//     fs.mkdirSync("text")
//     console.log("Folder is created")
// }
// catch (error) {
//     if (error.code === "ENOENT")
//         console.log("Path is invaild")
//     else
//         console.log("Folder is already Exist")
// }

// const fs = require('fs')
// try {
//     fs.mkdirSync("new")
//     console.log("Folder is created")
// }
// catch (error) {
//     if (error.cod === "ENOENT")
//         console.log("Path is invalid")
//     else
//         console.log("Folder is already exist")
// }

//rmdirSync() :used to delete a folder in Sync mode,throw an exception if folder doesn't exist or path is invalid

// try {
//     fs.rmdirSync("test")
//     console.log("Folder is Deleted!!!")
// } catch (error) {
//     console.log("Folder Doesn't Exist")
// }

// const fs = require('fs')
// try {
//     fs.rmdirSync("Text")
//     console.log("Folder is Deleted!!!")
// }
// catch (error) {
//     console.log("Folder doesn't Exist")
// }

// const fs = require('fs')
// try {
//     fs.rmdirSync("Text")
//     console.log("Folder is Deleted")
// }
// catch (error) {
//     console.log("Folder doesn't Exist !!!")
// }


// const fs = require('fs')
// try {
//     fs.rmdirSync("new")
//     console.log("Folder is deleted");
// }
// catch (error) {
//     console.log("Folder doesn't exist !!!")
// }

/*
writeFileSync()
create a new file if file doesn't exist, and if file already exist
it delete all content of file and re-write data into it
*/


// try {
//     fs.writeFileSync("test/sample.txt", "Hello World1\n")
//     fs.writeFileSync("test/sample.txt", "Hello World2\n")
//     fs.writeFileSync("test/sample.txt", "Hello World3\n")
//     fs.writeFileSync("test/sample.txt", "Hello World4\n")
//     fs.writeFileSync("test/sample.txt", "Hello World5\n")
//     console.log("Done")
// } catch (error) {
//     // console.log(error)
//     console.log("Path is Invalid")
// }


// const fs = require('fs')
// try {
//     fs.writeFileSync("text/sample.txt", "Hello World1\n");
//     fs.writeFileSync("text/sample.txt", "Hello World2\n");
//     fs.writeFileSync("text/sample.txt", "Hello World3\n");
//     fs.writeFileSync("text/sample.txt", "Hello World4\n");
//     fs.writeFileSync("text/sample.txt", "Hello World5\n");
// }
// catch (error) {
//     console.log("Path is Invalid");
// }

// const fs = require('fs')
// try {
//     fs.writeFileSync("new/sample.txt", "Hello World 1\n");
//     fs.writeFileSync("new/sample.txt", "Hello World 2\n");
//     fs.writeFileSync("new/sample.txt", "Hello World 3\n");
//     fs.writeFileSync("new/sample.txt", "Hello World 4\n");
//     fs.writeFileSync("new/sample.txt", "Hello World 5\n");
// }
// catch (error) {
//     console.log("Path is Invalid");
// }

/*
appendFileSync()
create a new file if file doen't exist, and if file already exist
it write data after old data
*/
// try {
//     fs.appendFileSync("test/sample.txt", "Hello World1\n")
//     fs.appendFileSync("test/sample.txt", "Hello World2\n")
//     fs.appendFileSync("test/sample.txt", "Hello World3\n")
//     fs.appendFileSync("test/sample.txt", "Hello World4\n")
//     fs.appendFileSync("test/sample.txt", "Hello World5\n")
//     console.log("Done")
// } catch (error) {
//     // console.log(error)
//     console.log("Path is Invalid")
// }

// try {
//     fs.appendFileSync("text/sample.txt", "Hello World1\n")
//     fs.appendFileSync("text/sample.txt", "Hello World2\n")
//     fs.appendFileSync("text/sample.txt", "Hello World3\n")
//     fs.appendFileSync("text/sample.txt", "Hello World4\n")
//     fs.appendFileSync("text/sample.txt", "Hello World5\n")
//     console.log("Done")
// }
// catch (error) {
//     console.log("Path is Invalid")
// }

// const fs = require('fs')
// try {
//     fs.appendFileSync("new/sample.txt", "Hello World1\n")
//     fs.appendFileSync("new/sample.txt", "Hello World2\n")
//     fs.appendFileSync("new/sample.txt", "Hello World3\n")
//     fs.appendFileSync("new/sample.txt", "Hello World4\n")
//     fs.appendFileSync("new/sample.txt", "Hello World5\n")
//     console.log("Done")
// } catch (error) {
//     // console.log(error)
//     console.log("Path is Invalid")
// }

/*
readFileSync()
read a file and return data
if we not use any encoding then data is return in buffer format
to encode use 'utf-8',throw exception if file doesn't exist or invalid path
 */
// try {
//     let data = fs.readFileSync("test/sample.txt","utf-8")
//     console.log(data)
// } catch (error) {
//     console.log("Path is Invalid")
// }

// try {
//     let data = fs.readFileSync("text/sample.txt", "utf-8")
//     console.log(data)
// } catch (error) {
//     console.log("Path is Invalid");
// }

// const fs = require('fs')
// try {
//     let data = fs.readFileSync("new/sample.txt", "utf-8")
//     console.log(data)
// }
// catch (error) {
//     console.log("Path is Invalid")
// }

// fs.renameSync() : used to rename a file
// try {
//     fs.renameSync("test/sample.txt","test/example.txt")
//     console.log("File name has been changed")
// } catch (error) {
//     console.log("Path is Invalid")
// }

// try {
//     fs.renameSync("text/sample.txt", "test/example.txt")
//     console.log("File name has been changed")
// }
// catch (error) {
//     console.log("Path is Invalid");
// }

// const fs = require('fs')
// try {
//     fs.renameSync("new/sample.txt", "news/example.txt")
//     console.log("File name has been changed")
// }
// catch (error) {
//     console.log("Path is Invalid")
// }

//unlinkSync() : used to delete a file
// try {
//     fs.unlinkSync("test/example.txt")
//     console.log("file has been deleted")
// } catch (error) {
//     console.log("Path is Invalid")
// }

// try {
//     fs.unlinkSync("text/sample.txt")
//     console.log("File has been deleted")
// }
// catch (error) {
//     console.log("Path is Invalid")
// }

// const fs = require('fs')
// try {
//     fs.unlikeSync("new/sample.txt")
//     console.log("File has been deleted")
// }
// catch (error) {
//     console.log("Path is Invalid");
// }

// Done