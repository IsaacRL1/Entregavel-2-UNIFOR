<<<<<<< HEAD
function calcularMDC() {
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    
    while(num2 !== 0) {
        var resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }

    
    document.getElementById("resultado").innerHTML = "O MDC dos números é " + num1;
=======
function calcularMDC() {
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    
    while(num2 !== 0) {
        var resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }

    
    document.getElementById("resultado").innerHTML = "O MDC dos números é " + num1;
>>>>>>> d3c59aab014ba330831b3d10f54442d2d81a12e3
}