const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i in maioresPaises) {
    let string = (`${Number(i)+1} - `);
    for (let j of maioresPaises[i]) {
       string +=(`${j}`);
    }
    console.log(string);
}

let i = 1
for (let j of maioresPaises) {
    console.log(`${i} - ${j}`);
    i++
}