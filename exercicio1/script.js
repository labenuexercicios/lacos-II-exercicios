const array = [
  [27, 20, 13, 14, 7],
  [11, 15, 12, 8, 4],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

for (let temporada in array) {
  console.log(`Gols do jogador ${Number(temporada) + 1}:`);

  for (let i = 0; i < array[temporada].length; i++) {
    console.log(`temporada ${Number(i) + 1}:${array[temporada][i]}`);
  }
}
