const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let data = document.getElementById("data").value;
  let horario = document.getElementById("horario").value;
  let pessoas = document.getElementById("pessoas").value;

  if (nome.trim() === "") {
    alert("Digite seu nome!");
  } else if (!nome.trim().includes(" ")) {
    alert("Digite nome e sobrenome!");
  } else if (telefone.trim() === "") {
    alert("Digite seu telefone!");
  } else if (telefone.trim().length < 10) {
    alert("Digite o telefone com DDD!");
  } else if (data === "") {
    alert("Escolha uma data!");
  } else if (horario === "") {
    alert("Escolha um horário!");
  } else if (pessoas === "" || pessoas >= 1) {
    alert("reservas só acima de 2 pessoas!");
  } else {
    alert("Reserva feita com sucesso!");
    formulario.reset();
  }
});