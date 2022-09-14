const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let s of maioresPaises) {
    const i = maioresPaises.indexOf(s)
    console.log(`${i + 1} - ${s}`)
}