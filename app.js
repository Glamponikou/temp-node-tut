//package p ekana egw install (lodash), einai dld external
//prepei opwsdhpote na to exw kanei install
//den einai san ta packages tis node(http,fs.klp)
const _ = require('lodash')

const items = [1, [2, 3 , [4]]]

const newItems = _.flattenDeep(items);
console.log(newItems)