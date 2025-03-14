function entrar() {
  var nome = prompt("Digite seu nome!");
  // alert("Clicando");
  if (nome === "" || nome === null) {
    alert("Ops algo deu errado");
    area.innerHTML = "Clique no botão para acessar...";
    //
  } else {
    area.innerHTML = "Bem vindo ao sistema " + nome + " ";
  }
}
