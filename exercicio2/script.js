// Resolução do Exercício 2

let num = Number(prompt("Informe um número, para saber a Tabuada"))
let tabuada = [1,2,3,4,5,6,7,8,9,10]

console.log (`O número escolhido é ${num}`)
for (let i in tabuada){
    resultado = (Number(i)+1)*num
    console.log (`${num} x ${Number(i)+1} = ${resultado}`)
}   