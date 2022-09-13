let num = prompt("Escolha um número para visualizar a tabuada:")

array = ["a",2,3,4,5,6,7,8,9,10]

for(let i in array){
    
    console.log(`${num} X ${Number(i)+1} = ${num*(Number(i)+1)}`)
    
}

