// fórmula para calcular porcentagem: valor + (valor * porcentagen/100)

// Valores que vão vim através do usuario
let dinheiro = parseFloat(prompt("digite uma quantidade em dinheiro:"));
let porcentagem = parseInt(prompt("Digite o desconto"));

// Adicionando a fórmula para calcular o desconto(-)
let resultado = dinheiro - (dinheiro *porcentagem/100);

console.log(`Valor do produto: $${dinheiro}\nDesconto: ${porcentagem}%\nAdicionando o desconto fica: $${resultado}`);