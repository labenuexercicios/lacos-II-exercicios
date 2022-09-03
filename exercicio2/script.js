let numero = Number(prompt("digite um numero e calcule sua tabuada"))

let tabuada = [1,2,3,4,5,6,7,8,9,10]

for (let i in tabuada){
  console.log(` tabuada de ${numero} -> ${tabuada[i]*numero}`)
}
