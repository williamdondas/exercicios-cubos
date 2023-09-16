
const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];



function divideArray(array, num){
    let novoArray = array;
    let grupo1 = '';
    let grupo2 = ''

    grupo1 = novoArray.splice(0,num);
    grupo2 = novoArray

    
    console.log(`Grupo1: ${grupo1}`)
    console.log(`Grupo2: ${grupo2}`)
}


divideArray(nomes,4)