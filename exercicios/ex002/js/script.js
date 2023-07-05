function calcula() {
  const nome = document.getElementById("name").value;
  const sexo = document.querySelector('input[name="genero"]:checked').value;
  const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
  const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));

  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    let imc = peso / (altura * altura);

    let mensagem = "";
    let situacao = "";

    if (sexo === "feminino") {
      if (imc < 18.5) {
        situacao = "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 25) {
        situacao = "Peso normal";
      } else if (imc >= 25 && imc < 30) {
        situacao = "Sobrepeso";
      } else if (imc >= 30 && imc < 35) {
        situacao =
        situacao = "Obesidade grau 1";
      } else if (imc >= 35 && imc < 40) {
        situacao =
        situacao = "Obesidade grau 2";
      } else {
        situacao =
        situacao = "Obesidade grau 3";
      }
      mensagem = `Seu IMC é: ${imc.toFixed(2)} (${situacao})`;
    } else if (sexo === "masculino") {
      if (imc < 18.5) {
        situacao = "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 25) {
        situacao = "Peso normal";
      } else if (imc >= 25 && imc < 30) {
        situacao = "Sobrepeso";
      } else if (imc >= 30 && imc < 35) {
        situacao = "Obesidade grau 1";
      } else if (imc >= 35 && imc < 40) {
        situacao = "Obesidade grau 2";
      } else {
        situacao = "Obesidade grau 3";
      }
      mensagem = `Seu IMC é: ${imc.toFixed(2)} (${situacao})`;
    } else {
      mensagem = "Selecione um sexo válido.";
    }
    document.getElementById('resultadoImc').innerText = mensagem;
  } else {
    document.getElementById('resultadoImc').innerText =
      "Por favor, digite valores válidos para peso e altura.";
  }
}
