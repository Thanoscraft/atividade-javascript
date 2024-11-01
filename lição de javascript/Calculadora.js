function calcular(operacao) {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira ambos os números";
    } else {
        switch (operacao) {

            case 'soma':
                resultado = valor1 + valor2;
                break;

            case 'subtrair':
                resultado = valor1 - valor2;
                break;

            case 'multiplicar':
                resultado = valor1 * valor2;
                break;

            case 'dividir':
                resultado = valor2 !== 0 ? valor1 / valor2 : "Erro: Divisão por zero";
                break;

            default:
                resultado = "Operação Inválida";
        }
    }

    document.getElementById("resultado").innerText = "O resultado é " + resultado;
}