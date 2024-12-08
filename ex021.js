const escolha = parseInt(prompt("Escolha o número:\n1 - cartão\n2 - pix"));

/* Verifica a escolha do usuário e exibe uma mensagem correspondente no console
Se 'escolha' for 1, mostra "Pagamento com cartão"
se não, mostra "Pagamento com pix" */
console.log(`Pagamento com ${escolha === 1 ? "cartão" : "pix"}`);