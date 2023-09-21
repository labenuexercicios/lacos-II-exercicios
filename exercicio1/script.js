/* # Exercício 1

Uma pessoa analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

```bash
Jogador 1: 13, 15, 25, 34, 35
Jogador 2: 30, 48, 30, 12, 47 */



const golsDosJogadores = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
for(let i = 0 ; i < golsDosJogadores.length ;  i++){
    //pega o primeiro indice do array, que é a primeira lista do array
    const jogador = golsDosJogadores[i]
    //mostra o jogador(q é o array dentro do array)> 1{} mostra o n de jog. a 2{} mostra gols por jog.
    console.log(`jogador - ${i +1} : ${jogador}`)
        //precorre o array do indice indicado e vai até o final dele
        for(let j = 0; j < jogador.length ; j++){
            console.log(`temporada ${jogador[j]}`)
        }console.log("-------------------")
} 




