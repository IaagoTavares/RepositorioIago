function soma() {
    var var1 = parseInt(document.getElementById('n1').value);
    var var2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('vem');

    let somando = var1 + var2;

    resultado.innerHTML = somando;
}

function subtracao() {
    var var1 = parseInt(document.getElementById('n1').value);
    var var2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('vem');

    let somando = var1 - var2;

    resultado.innerHTML = somando;
    
}

function divisao() {
    var var1 = parseInt(document.getElementById('n1').value);
    var var2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('vem');

    let somando = var1 / var2;

    resultado.innerHTML = somando;
    
}

function multiplicacao() {
    var var1 = parseInt(document.getElementById('n1').value);
    var var2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('vem');

    let somando = var1 * var2;

    resultado.innerHTML = somando;
    
}

function resto() {
    var var1 = parseInt(document.getElementById('n1').value);
    var var2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('vem');

    let somando = var1 % var2;

    resultado.innerHTML = somando;
    
}

function inteiro() {
    var var1 = parseInt(document.getElementById('n1').value);
    var var2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('vem');

    let somando = parseInt(var1 / var2);
    

    resultado.innerHTML = somando;
    
}