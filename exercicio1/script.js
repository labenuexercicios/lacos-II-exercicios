  /*  Uma pessoa analista quer conseguir ver quantos gols cada u
    m de seus 5 atacantes marcou nas últimas 5 temporadas, e quer 
    que você construa um código que mostre isso.

    Crie um laco `for` que itere pelo array deixado no 
    arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. 
    Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:*/


const golsDosAtacantes = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for (let jogador = 0; jogador < golsDosAtacantes.length; jogador++) {
    console.log(`Jogador ${jogador + 1}: ${golsDosAtacantes[jogador]}`);
}
        