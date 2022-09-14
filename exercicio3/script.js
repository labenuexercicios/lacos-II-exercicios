// // *Utilize o for...of para resolver*
// // jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"


// const arrayPaises = ['Rússia', 'Canadá','China','EUA','Brasil'];
    
// for(let i  of arrayPaises){
//     console.log(`${arrayPaises.indexOf(i) +1} - ${i}`)
// }

// //Or
// console.log('===================================')


let arrayPaises1 = ['Rússia', 'Canadá','China','EUA','Brasil']
let contador = 0

for (let pais of arrayPaises1){
    contador += 1
    console.log(`${contador} - ${pais}`)
}

