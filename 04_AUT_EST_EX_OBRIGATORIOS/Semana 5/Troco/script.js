function caixa() {
    var total = document.getElementById('valor').value;
    var resto 
    var notasdez
    var notascinco
    var notasum
    var notascem
    var notasvinte
    var notascinquenta
    var notasdois
    
   // console.log(total);
    
    if (total >= 100)
        var notascem = parseInt(total/100)
        var resto = total % 100
    if (resto >= 50)
        var notascinquenta = parseInt(resto/50)
        var resto = total % 50
    if (resto >= 20)
        var notasvinte = parseInt(resto/20)
        var resto = total % 20
    if (resto >= 10)
        var notasdez = parseInt(resto/10)
        var resto = total % 10    
    if (resto >= 5)
        var notascinco = parseInt(resto/5)
        var resto = total % 5
    if (resto >= 2)
        var notasdois = parseInt(resto/2)
        var resto = total % 2
    if (resto >= 1)
        var notasum = parseInt(resto/1)
        var resto = total % 2

        
        


console.log(notasdez)
console.log(notascinco)
console.log(notasum)

document.getElementById('not100').innerHTML = "NOTAS DE 100: " + notascem
document.getElementById('not50').innerHTML = "NOTAS DE 50: " + notascinquenta 
document.getElementById('not20').innerHTML = "NOTAS DE 20: " + notasvinte 
document.getElementById('not10').innerHTML = "NOTAS DE 10: " + notasdez 
document.getElementById('not5').innerHTML = "NOTAS DE 5: " + notascinco
document.getElementById('not2').innerHTML = "NOTAS DE 2: " + notasdois 
document.getElementById('not1').innerHTML = "NOTAS DE 1: " + notasum


}


