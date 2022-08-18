// Resolução do Exercício 3

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
let j = 0

console.log ("Os maiores Países do mundo são:")

for (let i of maioresPaises){
    j += 1
    console.log (`${j} - ${i}`)
}