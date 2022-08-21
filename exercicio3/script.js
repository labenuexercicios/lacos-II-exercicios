const prioridades = ['Migrar de carreira', 'Fazer graduação','Fazer inglês', 'Fazer Pós', 'Fazer MBA', 'Ter Filho?'];

console.log(`Lista de prioridades:`)
let cont = 1
    for (let i of prioridades) {
        console.log(`${cont}: ${i};`);
        cont += 1;
    };
    