var fs = require('fs');
var text = fs.readFileSync("./words_alpha.txt",  "utf-8");
const wordsArray = text.split(/\r\n/g)
module.exports = wordsArray
console.log(wordsArray);