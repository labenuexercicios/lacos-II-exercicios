// +prompt(`Digite um número`);
// console.log(typeof user);

let user = 9;
const baseTabu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`A tabuada escolhida foi do ${user}`);

for (base in baseTabu) {
  base = +base;
  console.log(`${user} X ${baseTabu[base]} = ${user * baseTabu[base]}`);
}
