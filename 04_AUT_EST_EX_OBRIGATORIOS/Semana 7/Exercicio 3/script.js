function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}


function verificar() {
      // criar uma variavel que contabiliza o numero de inteiros dentro da variavel.
    var numbers = document.getElementById("telefone").value;
    //console.log(numbers)
    var qtd = 0
       for (var i = 0; i <= 20; i++) {
         if ((numbers[i] == "1") || (numbers[i] == "2") || (numbers[i] == "3") || (numbers[i] == "4") || (numbers[i] == "5") || (numbers[i] == "6") || (numbers[i] == "7") || (numbers[i] == "8") || (numbers[i] == "9") || (numbers[i] == "0") )
             qtd += 1;
      }
   // console.log(qtd);
        if (qtd < 11)
            alert("INSIRA 11 NÚMEROS");
        else 
            alert("TUDO CERTIN")

}