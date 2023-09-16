


const usuarios = [
    {
        nome: "João",
        pets: [],
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

const [usuario1, usuario2, usuario3, usuario4, usuario5] = usuarios;
const novoArray = [usuario1,usuario2,usuario3,usuario4,usuario5]

for(i=0;i<novoArray.length;i++){
    if(novoArray[i].pets.length>1){
        console.log(`sou ${novoArray[i].nome} e  tenho ${novoArray[i].pets.length} pets`)
    }else if(novoArray[i].pets.length===1){
        console.log(`sou ${novoArray[i].nome} e  tenho ${novoArray[i].pets.length} pet`)
    }else{
        console.log(`sou ${novoArray[i].nome} e não tenho pets`)
    }
}
