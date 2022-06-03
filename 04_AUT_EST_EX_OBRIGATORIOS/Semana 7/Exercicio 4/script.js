function calcular() {
    var qtd_pessoas  = parseInt(document.getElementById("n1").value);
    var periodo = String(document.getElementById("n2").value);
    var price
    var valor

    if (periodo == "DIA")
        price = 200
    else 
        price = 100


    if (qtd_pessoas >= 50)
        if (periodo == "DIA"){
            valor = price * qtd_pessoas * 0.6
            console.log("Dia e mais de 50 pessoas, VALOR: " + valor)}
        else {
            valor = parseInt(price * qtd_pessoas * 0.8)
            console.log("Noite e mais de 50 pessoas, VALOR: " + valor)}
    else {
        valor = price * qtd_pessoas
        console.log("Menos de 50 pessoas, VALOR: " + valor )}


        }