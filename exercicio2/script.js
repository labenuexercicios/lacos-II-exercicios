let num = +prompt('Insira um número para calcular a tabuada até 10:');

let multTabuada = [1,2,3,4,5,6,7,8,9,10];
console.log(`A tabuada de ${num} é:`);
for (let i in multTabuada){
    console.log(`${num} * ${Number(i) + 1} = ${num*multTabuada[i]}`)
}