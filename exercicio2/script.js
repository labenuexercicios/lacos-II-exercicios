//EXERCÍCIO 2
let numeroTabuada = Number(prompt('Digite o número para uma tabuada:'))

const arrayTabuada = [1]

for(let i in arrayTabuada){
    for(let i = 1; i <= 10; i++){
        console.log(`${numeroTabuada} X ${i} = ${numeroTabuada * i}`)
    }
}