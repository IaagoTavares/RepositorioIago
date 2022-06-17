function calcular() {
    var n1  = parseInt(document.getElementById("n1").value);
    var n2  = parseInt(document.getElementById("n2").value);
    var primos = []

for (let i = n1; i <= n2; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        primos.push(i);
    }
}

alert(primos)

}

