const idade = parseInt(prompt("Digite sua idade"));

// Verificando a idade, se ela for maior ou igual a 18 anos (maior de idade) se não (menor de idade)
if (idade <= 18) {
    console.log("Você é menor de idade");
} else if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    alert("Digite sua idade")
}