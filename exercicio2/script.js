const numero = Number(prompt('Digite um numero para a tabuada'))

const tabuada = [1,2,3,4,5,6,7,8,9,10]

for (let i in tabuada){
    
    console.log(numero*tabuada[i]);
}

// for(let i = 1;i <= 10; i++ ){
//     console.log(numero*i);
// }image.png