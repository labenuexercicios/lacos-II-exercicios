const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let y = 0
for(var x of maioresPaises){
    y = y + 1
    console.log(`${Number(y)}-${x}`)
}