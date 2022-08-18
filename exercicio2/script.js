let num = Number(prompt("Número aq"))

// for (let i = 1; i <= 10; i++) {
//     console.log(num*i);
// }

let tabuada = [0,0,0,0,0,0,0,0,0,0]

for (let i in tabuada){
    console.log(num*(Number(i)+1));
}