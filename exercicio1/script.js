const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]


for (let temporada in array){
console.log(`Jogador ${Number(temporada)}:`)
	for(let i = 0; i < array[temporada].length; i++){
		console.log(`Temporada ${Number(i) +1} : ${array[temporada][i]}`);

	}

}