var input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const auto = 12;
const n1 = parseFloat(lines.shift());
const n2 = parseFloat(lines.shift());

console.log(n1);
console.log(n2);

var distancia = n1*n2/auto;

console.log(distancia.toFixed(3));


 
