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

// let fs = require('fs')

/*
mkdir():     used to create a folder, it throw an error is folder
             exist or Path is Invalid
*/
// fs.mkdir("test", (error) => {
//     if (error && error.code == "ENOENT")
//         console.log("Invalid Path")
//     else if (error)
//         console.log("Folder Already Exist")
//     else
//         console.log("Folder is Created")
// })

// const fs = require('fs')
// fs.mkdir("new", (error) => {
//     if (error && error.code == "ENOENT")
//         console.log("Invalid Path")
//     else if (error)
//         console.log("Folader Already Exist")
//     else
//         console.log("Folder is created")
// })

// const fs = require('fs')

// fs.mkdir("new", (error) => {
//     if (error && error.code == "ENOENT")
//         console.log("Invalid Path")
//     else if (error)
//         console.log("Folder Already Exist")
//     else
//         console.log("Fodler is created");
// })

/*
rmdir():     used to delete a folder, it throw an error is folder
             does not exist or Path is Invalid or folder is not Empty
 */
// fs.rmdir("test", (error) => {
//     if (error)
//         console.log("Folder Doesn't")
//     else
//         console.log("Folder is Deleted")
// })

// const fs = require('fs')
// fs.rmdir("new", (error) => {
//     if (error)
//         console.log("Folder Doesn't")
//     else
//         console.log("Folder is deleted");
// })


/*
writeFile():    used to write data into a file, if file doesn't exist
            is create a new file, and if file already exist,
            it delete a old data from file and rewrite new data
            into file
 */

// const fs = require('fs')
// fs.writeFile("test/sample.txt", "Hello World1\n", (error) => {
//     if (error)
//         console.log("Invalid Path")
//     else {
//         fs.writeFile("test/sample.txt", "Hello World2\n", (error) => { })
//         fs.writeFile("test/sample.txt", "Hello World3\n", (error) => { })
//         fs.writeFile("test/sample.txt", "Hello World4\n", (error) => { })
//         fs.writeFile("test/sample.txt", "Hello World5\n", (error) => { })
//         console.log("Done")
//     }
// })

// const fs = require('fs')
// fs.writeFile("new/sample.txt", "Hello World1\n", (error) => {
//     if (error)
//         console.log("Invalid Path")
//     else {
//         console.log("new/sample.txt", "Hello World2\n", (error) => { })
//         console.log("new/sample.txt", "Hello World3\n", (error) => { })
//         console.log("new/sample.txt", "Hello World4\n", (error) => { })
//         console.log("new/sample.txt", "Hello World5\n", (error) => { })
//         console.log("Done")
//     }
// })

/*
appendFile():    used to append data into a file, if file doesn't exist
            is create a new file, and if file already exist,
            it write new data after old data into file
  */

// fs.appendFile("test/sample.txt", "Hello World1\n", (error) => {
//     if (error)
//         console.log("Invalid Path")
//     else {
//         fs.appendFile("test/sample.txt", "Hello World2\n", (error) => { })
//         fs.appendFile("test/sample.txt", "Hello World3\n", (error) => { })
//         fs.appendFile("test/sample.txt", "Hello World4\n", (error) => { })
//         fs.appendFile("test/sample.txt", "Hello World5\n", (error) => { })
//         console.log("Done")
//     }
// })

// const fs = require('fs')
// fs.appendFile("new/sample.txt", "Hello World1\n", (error) => {
//     if (error)
//         console.log("Invalid Path")
//     else {
//         fs.appendFile("new/sample.txt", "Hello World2\n", (error) => { });
//         fs.appendFile("new/sample.txt", "Hello World3\n", (error) => { });
//         fs.appendFile("new/sample.txt", "Hello World4\n", (error) => { });
//         fs.appendFile("new/sample.txt", "Hello World5\n", (error) => { });
//         console.log("Done")
//     }
// })

/*
readFile(): used to read data from a file, if we not provide encryption
            it return buffer data so to decrypty provide utf-8
 */
// fs.readFile("test/sample.txt", "utf-8", (error, data) => {
//     if (error)
//         console.log("File Doesn't Exist")
//     else
//         console.log(data)
// })

// const fs = require('fs')
// fs.readFile("new/sample.txt", "utf-8", (error, data) => {
//     if (error)
//         console.log("File doesn't exist")
//     else
//         console.log(data);
// })

/*
rename()    :   used to rename a file, it throw an error is file
                doesn't exist or invalid Path
*/

// fs.rename("test/sample.txt", "test/example.txt", (error, data) => {
//     if (error)
//         console.log("File Doesn't Exist")
//     else
//         console.log("File name has been changed")
// })

// const fs = require('fs')
// fs.rename("new/sample.txt", "text/example.txt", (error, data) => {
//     if (error)
//         console.log("File doesn't exist")
//     else
//         console.log("File name has been changed")
// })

/*
unlink()    :   used to delete a file, it throw an error is file
                doesn't exist or invalid Path
*/

// fs.unlink("test/example.txt", (error, data) => {
//     if (error)
//         console.log("File Doesn't Exist")
//     else
//         console.log("File has been deleted")
// })

// const fs = require('fs')
// fs.unlink("new/sample.txt", (error, data) => {
//     if (error)
//         console.log("File doesn't exist")
//     else
//         console.log("File has bee deleted")
// })

// Done
