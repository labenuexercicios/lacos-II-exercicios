const imput = Number(prompt("digite um numero para imprimir a tabuada:"))

let tabela = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index in tabela){
    console.log(`${Number(index)+1} X ${imput} = ${(Number(index)+1)*imput}`)
}
