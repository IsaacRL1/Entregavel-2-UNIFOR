<<<<<<< HEAD
function irPag() {
    var select = document.getElementById('select');
    var valorSelecionado = select.options[select.selectedIndex].value;
    if (valorSelecionado !== "") {
      window.location.href = valorSelecionado;
    }
  }
  function voltar() {
      window.history.back();
=======
function irPag() {
    var select = document.getElementById('select');
    var valorSelecionado = select.options[select.selectedIndex].value;
    if (valorSelecionado !== "") {
      window.location.href = valorSelecionado;
    }
  }
  function voltar() {
      window.history.back();
>>>>>>> d3c59aab014ba330831b3d10f54442d2d81a12e3
  }