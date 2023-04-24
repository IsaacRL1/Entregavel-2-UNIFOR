
function calcularSomatorio() {
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var soma = 0;
    for(var i = inicio; i <= fim; i++) {
        soma += i;
    }

    document.getElementById("resultado").innerHTML = "O somatório dos números no intervalo é " + soma;

}