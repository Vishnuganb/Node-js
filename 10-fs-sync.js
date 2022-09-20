const{readFileSync,writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8') // If the encoding option is specified then this 
// function returns a string. Otherwise it returns a buffer.

//console.log(first,second)

writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:`a`}) // flag:`a` means append 

console.log('done with this task')
console.log('starting the next task')
