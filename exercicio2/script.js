//EXERCICIO2


const multiplicando = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numeroTabuada = Number(prompt("Digite um numero:"))

for (let i in multiplicando){
   const resultado = numeroTabuada * multiplicando[i]

   console.log(resultado)
}