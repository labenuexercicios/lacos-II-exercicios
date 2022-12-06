const variavel = +(prompt("Digite um número:"))
let vetor = []
let numero = 0

for(let x = 1; x <= 10; x++){
    numero = variavel * x
    vetor.push(numero)
}

for(let i in vetor){
    console.log(vetor[i])
}