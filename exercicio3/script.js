function ranking () {
    const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

    for(let pais of maioresPaises){
        const indice = maioresPaises.indexOf(pais)
        console.log(`${indice +1} - ${pais}`)
    }
}
ranking()