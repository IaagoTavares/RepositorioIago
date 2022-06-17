function calcular() {
    var n  = parseInt(document.getElementById("n1").value);
    var seq = []
    seq[0] = 1
    seq[1] = 1
    var i = 2
    var sum = 0

    while (i != n){
        seq[i]= seq[i-1] + seq[i-2]
        i += 1
    }
console.log(seq)
}