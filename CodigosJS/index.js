function irPag() {
    var select = document.getElementById('select');
    var valorSelecionado = select.options[select.selectedIndex].value;
    if (valorSelecionado !== "") {
      window.location.href = valorSelecionado;
    }
  }
  function voltar() {
      window.history.back();
    }