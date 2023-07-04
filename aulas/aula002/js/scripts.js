function olaMundo() {
    alert('Olá mundo!');
}

function pessoa() {
    var nome = 'Gabrieli';
    var peso = 52;
    var altura = 1.59;

    console.log(nome + ', ' + peso + ', ' + altura);

    var imc = peso / (altura * altura);

    console.log("IMC: " + imc);

    var obj = new Object();
    obj.nome = "Mariazinha";
    obj.idade = 9;
    obj.altura = 1.30;
    obj.ehMenina = true;

    console.log(obj);

    var obj2 = {
        nome: "Ana",
        idade: 55,
        peso: 55,
        altura: 1.60
    }
    console.log("O IMC de " + obj2.nome + " é de " + (obj2.peso/(obj2.altura*obj2.altura)));
}

function frutas() {
    var frutas = ["Maça", "Laranja", "Banana"];
    console.log(frutas[1]);
    frutas.push("Abacaxi");
    console.log(frutas);
}

function testeError() {
    var teste1;
    console.log(teste1); //undefined - valor não atribuído
    var teste2 = null;
    console.log(teste2); //null - valor nulo
    var n = 20;
    var str = "Texto";
    console.log(n * str); //NaN - erro de conversão
    console.log(2e3); //OK exibe 2000
    console.log(2e4); //OK exibe 20000
    console.log(2e308); //estoura o limite do javascript - Infinity
}

function testaValores() {
    console.log("37"-7);
    console.log("37"+7);
    console.log("1.1"+"1.1");
    console.log((+"1.1")+(+"1.1"));
    console.log(parseFloat("1.1") + parseFloat("1.1"));

    var numero = "123.456";
    numero = parseInt(numero)
    console.log(numero);

    let booleanComoString = "true"; // Só reconhece string vazia como false
    let b = Boolean(booleanComoString);
    if (b == true) console.log("Verdadeiro: " + b);
    else console.log("Falso: " + b);
}

function testaIf() {
    const idade = 18;
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}

function enviaFormulario() {
    nome = document.getElementById("txtNome").value;
    idade = document.getElementById("txtIdade").value;
    msg = "Nome: " + nome + "\nIdade: " + idade
    alert(msg);
    return false;
}