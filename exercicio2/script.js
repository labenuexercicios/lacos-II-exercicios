const inputNumber = (10)


console.log(`A tabuada de 1 a 10 é: `)

for (let i = 0; i<=10; i++) {
    let tabuada = [i * inputNumber];
    for (let j in tabuada){
        console.log(`${inputNumber}X${i} = ${tabuada[j]} `)
    }
}