// Valor pode ser alterado
let idade_ = 16;
let preco = 100;

// Fazendo o calculo do desconto e a verificação se é maior ou menor
let desconto = idade_ >= 60 ? preco * 0.10 : 0;

console.log(`Você ganhou $${desconto} de desconto`)