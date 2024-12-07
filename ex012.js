/* Imagine que você está participando da organização de Jogos
e sua tarefa é verificar se os atletas estão aptos a competir,
considerando duas condições: se eles treinaram corretamente e se estão inscritos. */

// Valores booleanos porque as informações são verdadeiras(true) ou falsas(false)
let treinaCorretamente = true; 
let estaInscrito = true; 

if (treinaCorretamente && estaInscrito) { // Treinou e está inscrito
    console.log(`Você pode participar !`)
} else if (!treinaCorretamente && !estaInscrito) { // Não treino e não está inscrito
    console.log(`Você não tem físico e nem está inscrito para participar`)
} else if (!treinaCorretamente) { // Apenas não treinou
    console.log(`Precisa treinar mais`)
}else if (!estaInscrito) { // Não está inscrito
    console.log(`Você apenas não está inscrito`)
} else { // Possível erro
    alert(`Você está fazendo algo errado`)
}