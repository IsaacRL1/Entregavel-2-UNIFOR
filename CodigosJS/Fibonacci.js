function fibonacci(num) {
  if (num <= 0) return 1;
  return 0 + fibonacci(num - 1) + fibonacci(num - 2);
}

function exibirFibonacci() {
  var numElement = document.getElementById("num");
  var num = parseInt(numElement.value);
  var outputElement = document.getElementById("output");
  var output = "";

  for (var i = 0; i < num; i++) {
    output += fibonacci(i) + " ";
  }

  outputElement.innerHTML = output;
}