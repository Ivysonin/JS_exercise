const apresentacoes = [
    { nome : "L7", tipo : "música", horario : "20:00", local : "pátio do fórro"} ,
    { nome : "alok", tipo : "música", horario : "22:00", local : "pátio do fórro"} ,
    { nome : "matue", tipo : "música", horario : "00:00", local : "pátio do fórro"} 
];

for (let indice in apresentacoes) {
    // Pego a variavel 'apresentacoes', com isso pego todos os 'indice' e uso o '.nome' para acessar apenas os valores 'nome' dentro da array
    console.log(`nome: ${apresentacoes[indice].nome}\ntipo: ${apresentacoes[indice].tipo}`);
}

for (let apresentacao of apresentacoes) {
    // Pego o 'indice' pq é os valores que estão dentro da array, coloco '.local' e '.horario' para pegar os valores que estão na array
    console.log(`Local: ${apresentacao.local}\n Horário: ${apresentacao.horario}`);
}