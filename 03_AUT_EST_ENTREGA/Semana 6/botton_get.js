
/* 
=======================
Declaração de variáveis
=======================
*/

var getResDiv = "#get";


function TestGET(){
    var url = "http://127.0.0.1:3061/";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    $(getResDiv).append("<br />" + xhttp.responseText);
    // alert(xhttp.responseText);
}
