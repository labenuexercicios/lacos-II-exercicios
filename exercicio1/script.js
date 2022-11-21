// # Exercício 1

// Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47

const array = [
    [27, 4, 20, 13, 14],  //Jogador 1
    [11, 15, 12, 8, 9],   //Jogador 2
    [5, 5, 12, 16, 4],    //Jogador 3
    [20, 33, 11, 12, 19], //Jogador 4
    [3, 3, 4, 5, 10]      //Jogador 5
]

// for(inicial; teste; incremento){}

for(i = 0; i <= 4; i++){ // i<=4 quer dizer que vai começar no índice 0 e vai até o índice 4
    // também pode usar o i <= array.length que puxa a quantidade de arrays que tem automaticamente
    console.log(`Jogador ${i+1} - ${array[i]}`) //i+1 para o primeiro jogador não ser o jogador 0
    // ${array[i]} para mostrar todos os valores dos índices
}