

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// abaixo a solução do item a

/*frutas.reverse();

const stringfrutas= frutas.join(", ");

frutas.splice(4,1,"Melão")
console.log(stringfrutas)*/

//solução do item b

frutas.shift();
frutas.splice(-1,1,"Melão")

console.log(frutas)