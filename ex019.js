const nota = parseFloat(prompt('digite uma nota'));

// Se a nota for maior ou igual a 7 imprime 'Aprovado' se não 'Reprovado'
console.log(`Nota: ${nota}\nVocê foi ${nota >= 7 ? "Aprovado" : "Reprovado"}`);