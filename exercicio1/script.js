const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

console.log("Método 1:")
for (let i = 0; i < array.length; i++) {
    const jogador = array[i]
    let gols = ""

    for (j = 0; j < jogador.length; j++) {
        const gol = jogador[j]
        if (j > 0) gols += ", "
        gols += gol.toString()
    }

    console.log(`Jogador ${i + 1}: ${gols}`)
}

console.log("Método 2:")
for (let i = 0; i < array.length; i++) {
    const jogador = array[i]
    console.log(`Jogador ${i + 1}: ${jogador.reduce((a, b) => `${a}, ${b}`)}`)
}

console.log("Método 3:")
array.forEach((jogador, i) =>
    console.log(`Jogador ${i + 1}: ${jogador.reduce((a, b) => `${a}, ${b}`)}`)
);