// Solicita que o usuário insira um número e armazena o valor digitado
let numero = parseFloat(prompt("Digite um número:"));

// Verifica se o número é positivo
if (numero > 0) {
    // Se o número for maior que zero, exibe um alerta informando que é positivo
    alert("O número é positivo.");
} 
// Verifica se o número é negativo
else if (numero < 0) {
    // Se o número for menor que zero, exibe um alerta informando que é negativo
    alert("O número é negativo.");
} 
// Se o número não for nem positivo nem negativo, então é zero
else {
    // Exibe um alerta informando que o número é zero
    alert("O número é zero.");
}

