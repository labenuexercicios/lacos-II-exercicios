const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]


// for (i in array){
//     console.log(`jogador ${Number(i)+1}: ${array[i]}`)
// }

// JEITO PARA USUAR COM OUTRAS LINGUAGENS ABAIXO. 

for (let i in array){
let temporada = `temporada ${ Number(i)+1}:`
    for (let j of array[i]){
        temporada +=   j  +  ", "
    }
    console.log(temporada)
}