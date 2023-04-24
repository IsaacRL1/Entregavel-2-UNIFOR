
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var pivot = arr[Math.floor(Math.random() * arr.length)];
    var less = [];
    var equal = [];
    var greater = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) less.push(arr[i]);
        else if (arr[i] == pivot) equal.push(arr[i]);
        else greater.push(arr[i]);
    }
    return quickSort(less).concat(equal, quickSort(greater));
}

function ordenarNumeros() {
    var inputElement = document.getElementById("numeros");
    var numeros = inputElement.value.split(" ").map(Number);
    var outputElement = document.getElementById("ordenados");
    var ordenados = quickSort(numeros);
    outputElement.innerHTML = ordenados.join(" ");

}