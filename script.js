
function calcularIMC() {

    let peso = parseFloat(
        document.getElementById("peso").value
    );

    let altura = parseFloat(
        document.getElementById("altura").value
    );

    if (!peso || !altura) {
        document.getElementById("resultado").innerHTML =
            "Preencha todos os campos!";
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    document.getElementById("resultado").innerHTML =
        `IMC: ${imc.toFixed(2)}<br>${classificacao}`;
}