const numero = ["1","2","3","4","5","6","7","8","9","10"]
const pergunta = Number(prompt("Escolha um número de 1 a 10"))


for (let i in numero){
    console.log(`${Number(i)+1} x ${pergunta} = ${pergunta*(Number(i)+1)}`)
}