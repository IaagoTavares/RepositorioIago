var input = require('fs').readFileSync('stdin', 'utf8');

const lines = input.split('\n');

var number = lines.shift();
var cont = 0;
var media = 0;

while (true){
    if (number >= 0 && number <= 10 ){
        cont ++;
        media += parseFloat(number);
    }
    else{
        console.log("nota invalida")
    }         

if (cont == 2){
    final = (media /2);
    console.log(final);
    return;
}

 number = lines.shift();

}

