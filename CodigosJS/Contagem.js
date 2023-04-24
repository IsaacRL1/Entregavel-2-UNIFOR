function iniciarContagem() {

    var numInicial = parseInt(document.getElementById("numInicial").value);
    
    for(var i = numInicial; i <= 10; i++) {
       
        document.getElementById("contador").innerHTML += i + "<br>";
    }
}