// Resiolução do Exercício 1

const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

console.log(`A quantidade de gols por temporada de cada Jogador é:`)

for (let i=0; i<=array.length-1; i++){
        console.log(`Jogador ${i+1}: ${array[i]}`)
    }
