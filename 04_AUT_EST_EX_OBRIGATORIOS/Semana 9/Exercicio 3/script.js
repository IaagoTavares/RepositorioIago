
function verificar() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var names = []

    names.push(n1)
    names.push(n2)
    names.push(n3)


    alert("Ordem Alfabética: " + names.sort())

}