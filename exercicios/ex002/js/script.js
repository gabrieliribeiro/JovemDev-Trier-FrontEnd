function calcula() {
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);

    if(sexo === 'feminino'){
        if(imc < 18.5){
            alert(`Seu IMC é ${imc.toFixed(2)}e você está abaixo do peso!`);
        }else if (imc >= 18.5 && imc < 25){
            alert(`Seu IMC é ${imc.toFixed(2)} e você está no peso ideal!`);
        }else if (imc >= 25 && imc < 30){
            alert(`Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso!`);
        }else if (imc >= 30 && imc < 35){
            alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 1!`);
        }else if (imc >= 35 && imc < 40){
            alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 2!`);
        }else{
            alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 3!`);
        }
    } else {
        mensagem = 'Selecione um sexo válido.';
    }
}