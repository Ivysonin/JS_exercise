/* Desenvolva um programa
que apresenta o nome de cinco mulheres importantes 
na história da tecnologia e suas respectivas invenções ou feitos.
Abaixo estão algumas mulheres que você deve incluir no seu programa */

const escolha = parseInt(prompt("Escolha uma mulher da tecnologia (1 a 5):\n[ 1 ] - Ada Lovelace\n[ 2 ] - Grace Hopper\n[ 3 ] - Hedy Lamarr\n[ 4 ] - Marian Croak\n[ 5 ] - Gladys Mae West"));

// Estrutura de decisão: se a 'escolha' for exatamente '1,2,3,4,5' ele imprime um valor específico
if (escolha === 1) {
    console.log(`Ada Lovelace: Conhecida como a primeira programadora do mundo, escreveu o primeiro algoritmo destinado a ser processado por uma máquina.`);
} else if (escolha === 2) {
    console.log(`Grace Hopper: Criou o primeiro compilador para linguagens de programação e ajudou a desenvolver a linguagem COBOL.`);
} else if (escolha === 3) {
    console.log(`Hedy Lamarr: Inventora do sistema de espectro espalhado, base para tecnologias como Wi-Fi e Bluetooth.`);
} else if (escolha === 4) {
    console.log(`Marian Croak: Pioneira na tecnologia de Voz sobre IP (VoIP), contribuindo para a comunicação moderna.`);
} else if (escolha === 5) {
    console.log(`Gladys Mae West: Desenvolveu modelos matemáticos fundamentais para o Sistema de Posicionamento Global (GPS).`);
} else {
    alert('Opção inválida! Escolha um número de 1 a 5.');
}