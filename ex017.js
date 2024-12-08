const nome = prompt('Digite seu nome');
const idade = parseInt(prompt('Digite sua idade'));

// Fazendo uma verificação usando o Ternário, para simplificar o código.
console.log(`Ola ${nome}, você ${idade >= 16 ? "pode" : "não pode"} votar`);