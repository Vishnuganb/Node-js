const path = require('path')

console.log(path.sep) // it is going to return my platform specific separator

const filePath = path.join('./content','subfolder','test.txt') // const filePath = path.join('./content/','subfolder','test.txt')
//  const filePath = path.join('content','subfolder','test.txt') //3 ikum ore vidai thaan
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)