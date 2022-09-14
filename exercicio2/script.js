    // const num = prompt("Insira um número de 1 a 10 para ver a tabuada")
    // for(let a = 1; a <= 10; a++){
    
    //    {
    //         console.log(`${a} X ${num} = ${a*num} `)
    //         }
            
    // }



    const numTeste = prompt("Insira um número de 1 a 10 para ver a tabuada")
    const pais = [1,2,3,4,5,6,7,8,9,10]
    for(let nossaSenhora in pais){
        console.log(`${numTeste} X ${Number(nossaSenhora)+1} = ${numTeste*(Number(nossaSenhora)+1)}`)

    }