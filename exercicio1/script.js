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