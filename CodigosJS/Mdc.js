
function calcularSomatorio() {
    // Pega os valores dos campos de entrada
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);

    // Calcula o somatório dos números no intervalo
    var soma = 0;
    for(var i = inicio; i <= fim; i++) {
        soma += i;
    }

    // Mostra o resultado na página
    document.getElementById("resultado").innerHTML = "O somatório dos números no intervalo é " + soma;
}
