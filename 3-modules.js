// CommonJS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

//console.log(names)

//console.log(data)

//otan evala sketo john xwris to names.
// m ebgale error giati eto xw perasei sa names 
//k as ekana export to john

require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// px to sayHi(names.secret) leei hello there undefined

