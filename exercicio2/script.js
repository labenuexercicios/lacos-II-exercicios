
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numero = Number(prompt('bota um número ae'))

for(let i in tabuada){
    const resultado = numero * tabuada[i]
    console.log(resultado)
}