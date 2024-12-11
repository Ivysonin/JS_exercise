let numero = parseInt(prompt("Digite um número para verificar sua tabuada: "));
let contador = 1;

while (contador <= 10) {
    console.log(`${numero} x ${contador} = ${numero*contador}`);
    ++contador;
}