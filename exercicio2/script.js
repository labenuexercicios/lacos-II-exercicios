// EXERCÍCIO 2:

const num = Number(prompt("Digite um número"))
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10]

for(i in array){
    console.log(`${num} X ${array[i]} = ${num*array[i]}`)
}