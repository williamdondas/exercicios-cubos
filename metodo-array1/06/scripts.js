
const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]





 

 

 function achaDono(arrayUsuarios,nomePet){
    for(let i =0;i<arrayUsuarios.length;i++){
        if(arrayUsuarios[i].pets.includes(nomePet)){
            console.log(`O dono(a) do(a) ${nomePet} é o(a) ${arrayUsuarios[i].nome}`)
        } 
    }
 }

 achaDono(usuarios,"Max")

 