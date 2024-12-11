const numero_segredo = 5;
let tentativas = 4;

do {
    tentativas--;

    let escolha = parseInt(prompt("Digite um número para adivinhar o número segredo"));

    if (escolha > numero_segredo) {
        alert(`Número alto, tente um mais baixo\nTentativas: ${tentativas}`);
    } else if (escolha < numero_segredo) {
        alert(`Número baixo, tente um mais alto\nTentativas: ${tentativas}`);
    } else if (escolha === numero_segredo) {
        console.log(`Você acertou, o número segredo era ${numero_segredo}`);
        break;
    } else {
        alert("Digite números inteiros");
    }
}while (tentativas > 0);

if (tentativas == 0) {
    alert("Tentativas acabaram, tente depois !");
}