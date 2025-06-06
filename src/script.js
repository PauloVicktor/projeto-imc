function calcularIMC() {
    let peso = document.getElementById("peso").value.replace(",", ".");
    let altura = document.getElementById("altura").value.replace(",", ".");

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.99) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc <= 39.99) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    document.getElementById("resultado").innerText = `Seu IMC é: ${imc.toFixed(2)}`;
    document.getElementById("classificacao").innerText = `Classificação: ${classificacao}`;
}
