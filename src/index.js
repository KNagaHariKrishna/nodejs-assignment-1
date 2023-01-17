const fs = require('fs/promises')
const path = require("path");

const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile(fileName, fileContent, (err) => {
		    console.log(err);
		})
}

const myFileReader = async (fileName) => {
    const data=await fs.readFile((fileName), "utf-8", )
		console.log(data);    
}
const myFileUpdater = async (fileName, fileContent) => {

	await fs.appendFile(fileName, fileContent, (issue) => {
    console.log(issue);
})
}

const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName, (err) => {
		    console.log(err);
		})
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }