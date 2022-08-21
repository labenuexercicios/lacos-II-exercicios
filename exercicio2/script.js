//exercicio 2

const tabuada = [1,2,3,4,5,6,7,8,9,10]
const numero = Number(prompt("Informe um número  de 1 a 10 que deseja tabular"))

for(const i in tabuada){
console.log(`A TABUADA DE ${numero} * ${tabuada[i]} É:7`, tabuada[i] * numero)
}