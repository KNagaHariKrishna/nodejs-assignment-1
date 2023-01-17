const curd=require("./index.js")
// console.log(curd);
// curd.myFileWriter("File.txt","Hello")
// curd.myFileUpdater("File.txt"," World")
// curd.myFileReader("File.txt")
curd.myFileDeleter("File.txt")

// In JavaScript, the fs module is a built-in Node.js module that provides functions for working with the file system. It allows you to perform operations such as reading and writing files, creating and deleting directories, and more.
// The fs/promises module is an alternative version of the fs module that uses promises instead of callbacks for handling asynchronous operations. Promises are a pattern for handling asynchronous operations that make it easier to write and manage asynchronous code.
// Here is an example of how you might use the fs module to read a file:

// Copy code
// const fs = require('fs');

// fs.readFile('/path/to/file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });
// Here is the equivalent code using the fs/promises module:

// Copy code
// const fs = require('fs/promises');

// async function readFile() {
//   try {
//     const data = await fs.readFile('/path/to/file.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }
// Apurba Ruidas15:22
// As you can see, the fs/promises version of the code uses the await keyword and a try/catch block to handle the asynchronous operation, rather than using a callback function. This can make the code easier to read and understand, especially in cases where you need to perform multiple asynchronous operations in sequence.
// You15:23
// k.nagaharikrishna@gmail.com