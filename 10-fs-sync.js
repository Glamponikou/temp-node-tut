const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//console.log(first, second);

//an sto arxeio eixe alla txt tha ta ekane overwritte
//kai an den uparxei o fakelos pou balame sto path, ton dhmiourgei
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`
)

/* me tin rithmisi flag a kanoyme append ara prosthetei nees grammes oxi overwritte
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag: 'a'}
)
*/

console.log('done with this task');
console.log('starting the next one');