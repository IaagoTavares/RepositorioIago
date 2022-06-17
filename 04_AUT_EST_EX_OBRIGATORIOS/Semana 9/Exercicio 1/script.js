function calcular() {
    let input = document.getElementById("n1").value;
    let value_centena = input[0]
    
    if(input.length == 3)
        if ((value_centena == 1) || (value_centena == 3) || (value_centena == 5) || (value_centena == 7) || (value_centena == 9)) 
            alert("Valor centena: " + value_centena + " (Impar)");
        else
            alert("Valor centena: " + value_centena + " (Par)");
    else
        alert("DIGITE APENAS 3 NÚMEROS")
        document.getElementById("n1").value = 0

}


