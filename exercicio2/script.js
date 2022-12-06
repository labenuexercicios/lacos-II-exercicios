let input = [prompt('Por favor, insira um número')]
let tabuada = [0,1,2,3,4,5,6,7,8,9,10]


console.log(`Tabuada de ${input}`)
for (const indice in tabuada) {
    console.log(`${input} X ${tabuada[indice]} = ${input*tabuada[indice]}`)
        
    };
