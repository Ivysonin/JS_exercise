const escolha = parseInt(prompt("Escolha o seu plano:\n1 - básico\n2 - premium"));

// Se a escolha for exatamente igual a 1, imprime "basico" se não "premium"
console.log(`Plano escolhido: ${escolha === 1 ? "básico" : "premium"}`);