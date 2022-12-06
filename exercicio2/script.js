/*Exercício 2

Crie um programa que peça um input de número para o usuário. 
Com este número, o código deve imprimir a tabuada do número,
de 1 a 10.

Utilize o for...in para resolver

Exemplo com entrada 7:

7
14
21
28
35
42
49
56
63
70*/

const array = [1,2,3,4,5,6,7,8,9,10]

let numeroUsuario = Number(prompt("Digite um numero"));

console.log(`Tabuada de ${numeroUsuario}`)    
for(let j of array){
    console.log(`${numeroUsuario} x ${array[j]} = ${numeroUsuario * array[j]}`); 
 }
 