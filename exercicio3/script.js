

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
for(let i in maioresPaises){
    let ranking = `${Number(i) + 1} - `
    for(let p of maioresPaises[i])
    ranking += `${p}`
    console.log(ranking)
}
