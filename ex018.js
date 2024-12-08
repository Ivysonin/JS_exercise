const numero = parseInt(prompt("Digite um número"));

/* Pego uma condição e verifico se é true ou false,
se for true, a variavel 'tipo' = 'par' se não a variavel 'tipo' = 'impar' */
let tipo = (numero % 2 === 0) ? "par" : "impar" 

// Exibindo o resultado
console.log(`O número ${numero} é ${tipo}`);