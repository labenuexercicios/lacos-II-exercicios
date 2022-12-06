let input = [prompt('Por favor, insira um número')]
let indicesX = [0,1,2,3,4,5,6,7,8,9,10]


console.log(`Tabuada de ${input}`)
for (const chave in indicesX) {
    console.log(`${input} X ${indicesX[chave]} = ${input*indicesX[chave]}`)
        
    }
