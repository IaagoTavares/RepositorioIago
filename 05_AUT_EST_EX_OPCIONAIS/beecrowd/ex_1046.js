var input = require('fs').readFileSync('stdin', 'utf8');

const lines = input.split(' ');

const n1 = parseFloat(lines.shift());
var salario
var reajuste 
var percentual
 
if ((n1 >=0) && (n1 <= 400.00)) {
    salario = n1 * 1.15;
    reajuste = salario - n1;
    percentual = (reajuste/n1)*100;
}

if ((n1 > 400.00) && (n1 <= 800.00)) {
    salario = n1 * 1.12;
    reajuste = salario - n1;
    percentual = (reajuste/n1)*100;
}

if ((n1 > 800.00) && (n1 <= 1200.00)) {
    salario = n1 * 1.10;
    reajuste = salario - n1;
    percentual = (reajuste/n1)*100;
}

if ((n1 > 1200.00) && (n1 <= 2000.00)) {
    salario = n1 * 1.07;
    reajuste = salario - n1;
    percentual = (reajuste/n1)*100;
}

if (n1 > 2000.00)  {
    salario = n1 * 1.15;
    reajuste = salario - n1;
    percentual = (reajuste/n1)*100;
}






console.log( "Novo salario: " + salario.toFixed(2) );
console.log( "Reajuste ganho: " + reajuste.toFixed(2));
console.log( "Em percentual: " + percentual.toFixed(0) + " %");