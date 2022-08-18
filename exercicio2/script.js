let  numero = +prompt("Digite um numero: ")

for (i = 1; i < 11; i++){
    const array = []
    array.push(i)
    //console.log("primeiro console",array)
    for (j in array){
        console.log(array*numero)
    }
}