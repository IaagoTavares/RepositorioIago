function aumentar() {
    var input = parseInt(document.getElementById("n1").value);
    var newvalue = input + 1; 
    console.log(newvalue);
    document.getElementById("n1").value = newvalue;

}


function diminuir() {
    var input = parseInt(document.getElementById("n1").value);
    var newvalue = input - 1; 
    console.log(newvalue);
    document.getElementById("n1").value = newvalue;


}