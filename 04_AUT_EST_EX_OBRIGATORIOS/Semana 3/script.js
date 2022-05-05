// comentário em js

// criando uma mesagem de aviso com alert 
//alert('Olá');

function ex01() {
    var v0 = document.getElementById('v0').value;
    const g = 10; //aceleração gravitacional 10m/s^2
    var hmax = (v0 * v0)/(2*g);

    tSubida = v0/g;
    document.getElementById('vem').innerHTML = "TEMPO DE SUBIDA = " + tSubida 
    document.getElementById('aqui').innerHTML = "ALTURA MÁXIMA = " + hmax 

    console.log("Tempo de subida = " + tSubida);
    console.log("Altura máxima = " + hmax);

    
    
}