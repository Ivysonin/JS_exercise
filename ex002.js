// Usuario digita um valor, e eu adiciono a variavel (nome, idade, peso)

let nome = prompt('Digite seu nome:'); //prompt() vem com 'str' por padrão, por isso não defino ela no ínicio.
let idade = parseInt(prompt('Digite sua idade:')); //Número int por causa da idade.
let peso = parseFloat(prompt('Digite seu peso:')); //Número float por causa do peso.

alert("Seja Bem-vindo(a) " + nome); //Tando boas vindas.

//Exibindo no console informações do usuario.
console.log('\n--- Informações ---\nNome: ' + nome + '\nidade: ' + idade + '\npeso: ' + peso);