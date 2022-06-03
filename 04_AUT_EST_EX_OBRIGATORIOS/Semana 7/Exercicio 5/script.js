var input_aluno = String(document.getElementById("n1").value); 
var input_prova = document.getElementById("n2").value;
var input_teste = document.getElementById("n3").value;

var teste = [] ;
var prova = [] ;
var aluno = [] ;


function inserir() {

    aluno.push(input_aluno);
    prova.push(parseFloat(input_prova));
    teste.push(parseFloat(input_teste));

 if ((input_aluno == "") || (input_prova == "") || (input_teste == ""))
    alert("Preencha todos os campos para cadastrar um aluno ");

}


function finalizar() {
    var val1 = String(document.getElementById("n1").value);
    var val2 = String(document.getElementById("n2").value);

    
}


