const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i of maioresPaises) {
    let string = `${i} - `;
    for (let j in maioresPaises) {
        string += (`${Number(j)}`);
    }
    console.log(string);

}


for (let i in maioresPaises) {
    let string = (`${Number(i)+1} - `);
    for (let j of maioresPaises) {
       string +=(`${j}`);
    }
    console.log(string);
}

for (let j of maioresPaises) {
    let i = 0
    i++
    console.log(`${i} ${j}`);
}
