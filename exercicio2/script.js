const num = +prompt("Insira um número:")
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`A Tabuada do ${num} é: `)

for(i in tabuada) {
    console.log(`${num} x ${tabuada[i]} = ${num * tabuada[i]}`)
}
