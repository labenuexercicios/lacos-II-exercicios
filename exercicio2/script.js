let inputNum = Number(prompt(`Digite o número a sua escolha:`))
console.log(`A tabuada do ${inputNum} é:`)

// for (let i = 1; i <= 10; i++){
//     tabuada = i * inputNum
//     console.log(tabuada)
// }

let tabuada = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
for (let i in tabuada){
    console.log((Number(i)+1)*inputNum)
}