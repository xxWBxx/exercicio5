function calcularAreaTriangulo(base, altura) {

    var area = (base * altura) / 2;

    return area;
}


function exibirResultado() {
    
    var base = parseFloat(prompt("Digite o valor da base do triângulo: "));

    var altura = parseFloat(prompt("Digite o valor da altura do triângulo: "));

    var resultado = calcularAreaTriangulo(base, altura);
    alert("A área do triângulo é: " + resultado.toFixed(2));
 } 