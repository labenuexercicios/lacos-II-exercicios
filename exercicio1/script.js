
const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for(let i in array){
    console.log(`Jogador ${(Number(i))+1}: ${array [i]}`)
}
	
/*
    const array = [
        [27, 4, 20, 13, 14] ,      // temporada 1
        [15, 12, 8, 9 ] ,           // temporada 2
        [15, 5, 12, 16, 41],       // temporada 3
        [120, 33, 11, 12, 19],    // Lemporada 4
        [3, 3, 4, 5, 10 ]       // temporada
    ]
    let jogador = Number ( 0 )
    for ( let i in array ) {
       // console.log ( 1 )
            for ( let j of array ) {
                if ( jogador === 5 ) {
                
                     jogador = 0
                }
            jogador ++
            console.log ( " Jogador " , jogador , " Temporada " , Number (i)+1,": ")
            console.log (j[i])

                }
            }
            */