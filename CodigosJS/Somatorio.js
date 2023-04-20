<<<<<<< HEAD
function calcularSomatorio() {
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var soma = 0;
    for(var i = inicio; i <= fim; i++) {
        soma += i;
    }

    document.getElementById("resultado").innerHTML = "O somatório dos números no intervalo é " + soma;
=======
function calcularSomatorio() {
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var soma = 0;
    for(var i = inicio; i <= fim; i++) {
        soma += i;
    }

    document.getElementById("resultado").innerHTML = "O somatório dos números no intervalo é " + soma;
>>>>>>> d3c59aab014ba330831b3d10f54442d2d81a12e3
}