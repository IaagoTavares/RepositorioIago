

function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}



function ordenar() {
    var nomeString = String(document.getElementById("n1").value);
    var array = nomeString.split(",");
    bubbleSort(array)
    
    alert(array);

}

function valor_foco() {
    var nomeString = String(document.getElementById("n1").value);
    var array = nomeString.split(",");
    bubbleSort(array)
    var indice = document.getElementById("n2").value;
    var element = array[indice];

    console.log(indice);
    alert(element);


}