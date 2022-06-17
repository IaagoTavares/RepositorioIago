function some() {
let n = document.getElementById("n1").value

var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
        console.log(n)
    }
    console.log (sum);

}


