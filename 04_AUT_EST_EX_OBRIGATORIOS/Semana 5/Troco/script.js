function caixa() {
    var total = document.getElementById('valor').value;
    var resto1 
    var resto2
    var notasdez
    var notascinco
    var notasdois
    var notascem
    var notascinquenta
    var notasvinte

   // console.log(total);
        
    if (total >= 100)
        var notascem = parseInt(total/100)
        var resto1 = total % 100
    if (resto1 >= 5)
        var notascinquent = parseInt(resto1/5)
        var resto2 = total % 5
    if (resto2 >= 1)
        var resto3 = parseInt(resto2/1)   
    if (total >= 10)
        var notasdez = parseInt(total/10)
        var resto4 = total % 10
    if (resto1 >= 5)
        var notascinco = parseInt(resto4/5)
        var resto5 = total % 5
    if (resto2 >= 1)
        var notasdois = parseInt(resto5/1)     


console.log(notasdez)
console.log(notascinco)
console.log(notasum)

document.getElementById('not100').innerHTML = "NOTAS DE 100: " + notasdez 
document.getElementById('not50').innerHTML = "NOTAS DE 59: " + notascinco
document.getElementById('not20').innerHTML = "NOTAS DE 20: " + notasum
document.getElementById('not10').innerHTML = "NOTAS DE 10: " + notasdez 
document.getElementById('not5').innerHTML = "NOTAS DE 5: " + notascinco
document.getElementById('not2').innerHTML = "NOTAS DE 2: " + notasum


}