// Common,Js - every file in node is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const  data = require('./6-alternative-flavor')
//console.log(names)
// console.log(data)

// sayHi("VishnuAbi")
// sayHi(names.vishnu)
// sayHi(names.abi)

require('./7-mind-grenade')