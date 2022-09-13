
const tabuada = [1,2,3,4,5,6,7,8,9,10]
let num = Number(prompt("Digite  um Número"))

for ( let i in tabuada){
   console.log(`${num} * ${tabuada[i]} = ${num*tabuada[i]}`)
}

