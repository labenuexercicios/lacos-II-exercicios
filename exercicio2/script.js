let numero = Number(prompt("Digite um número de 1 a 10"))

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i in array){
//    console.log(numero*array[i]);
console.log(`${numero} x ${i} = ${numero*i}`);
}

// for in lê arrays e objetos, por isso foi preciso criar um array
// crio uma array para percorrer o mesmo raciocínio de usar somente FOR


// COMENTADO USANDO SOMENTE FOR
// for(i = 0; i <= 10; i++){
//     console.log(numero*i)
// }