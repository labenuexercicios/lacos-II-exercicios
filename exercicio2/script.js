const num =  5// Number(prompt ("Digite um número: "));
let tabuada = [1,2,3,4,5,6,7,8,9,10];

for (i in tabuada){
    let cont = tabuada[i]*num;
    console.log (`${num} x ${tabuada[i]} = ${cont}`)
}

console.log ("\n\n\n");


for (i of tabuada) {
    console.log (i)
}