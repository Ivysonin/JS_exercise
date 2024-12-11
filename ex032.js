// Preço fixo dos itens
const precoSanduiche = 5.00;
const precoBebida = 3.00;
const precoSobremesa = 2.00;

let pedido = "";  // Armazena os itens do cliente
let total = 0;    // Armazena o valor total do pedido

alert("Bem-vindo à Lanchonete Nunes!"); // Mensagem inicial

while (true) {
    
    // Pergunta ao cliente oq ele deseja escolher
    let opcao = parseInt(prompt("Escolha um item do menu (1, 2, 3 ou 0 para encerrar):\n[ 1 ] Sanduíche - R$5,00\n[ 2 ] Bebida - R$3,00\n[ 3 ] Sobremesa - R$2,00\nDigite 0 para encerrar o pedido."))

    // verifica oq o cliente escolheu e adiciona a pedido
    if (opcao === 1) {
        pedido += "Sanduíche, ";
        total += precoSanduiche;
        console.log("Você escolheu: Sanduíche - R$5,00");
    } else if (opcao === 2) {
        pedido += "Bebida, ";
        total += precoBebida;
        console.log("Você escolheu: Bebida - R$3,00");
    } else if (opcao === 3) {
        pedido += "Sobremesa, ";
        total += precoSobremesa;
        console.log("Você escolheu: Sobremesa - R$2,00");
    } else if (opcao === 0) {
        alert("Pedido encerrado.");
        break;
    } else {
        alert("Opção inválida! Tente novamente.");
    }
}

// Exibe os itens que foram escolhidos
console.log(`\nItens do Pedido: ${pedido}`);
console.log(`Total a pagar: R$${total}`);
