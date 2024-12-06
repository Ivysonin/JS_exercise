/* Criando variaveis para as notas que o usuario vai poder digitar
e para calcular a media */
let nota1 = parseFloat(prompt("Primeira nota:"));
let nota2 = parseFloat(prompt("Segunda nota:"));
let media = (nota1 + nota2) / 2

console.log(`Suas notas foram:\nnota1: ${nota1}\nnota2: ${nota2}\nMédia: ${media}`)