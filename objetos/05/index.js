
const aulass =[
{
Identificador : 1,
Nome_da_Aula :" Introdução_a_programação"
},

 {
    Identificador : 2,
    Nome_da_aula : "Variáveis"

},


 {
    Identificador : 3,
    Nome_da_aula : "Condicionais"

},


 {
    Identificador : 4,
    Nome_da_aula : "Arrays"
}

]



const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: []
}

for(i=0;i<aulass.length;i++){
    curso.aulas.push(aulass[i])
}

console.log(curso)