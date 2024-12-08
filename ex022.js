const escolha = parseInt(prompt("Escolha um número:\n1 - Domingo\n2 - Segunda-feira\n3 - Terça-feira\n4 - Quarta-feira\n5 - Quinta-feira\n6 - Sexta-feira\n7 - Sábado"));

/*
Define o horário de funcionamento com base na escolha do usuário
Se a escolha for 7 (Sábado), define "A loja abre das 10h-16h."
Caso contrário, define "A loja abre das 9h às 18h"
*/
let horario = escolha === 7 ? "A loja abre das 10h-16h." : "A loja abre das 9h às 18h"

// Exibe o horário correspondente
console.log(horario);