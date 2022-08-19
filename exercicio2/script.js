  let tabuada = Number(prompt(`Qual é a tabuada que deseja saber ?`))

  // for (i = 0; i < 11; i ++) {
  //   console.log(tabuada*i);
  // }


  //laço for in

  let array =[1,2,3,4,5,6,7,8,9,10,11]

  for(i in array){
    console.log(`${tabuada} x ${i} = ${tabuada*i}`);
  }


// const numero = Number(prompt('Qual número da tabuada você deseja:'))

// const numeroMax = Number(prompt('Até qual valor sua tabuada escolhida deverá ser multiplicada?'))

// let tabuada = []

// for(i = 0 ; i < numeroMax ; i++){

//     tabuada[i] = i+1

// }

// for (i in tabuada){

//     i = Number(i)

//     console.log(`${numero}x${i+1} = ${numero*Number(tabuada[i])}`)

// }