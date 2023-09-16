
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const num = 3;

function grupoCarros(arrayCarros,num){
    let grupoCarros = '';

    grupoCarros = arrayCarros.slice(num,6);

    

    console.log(grupoCarros.join(" - "))

}

grupoCarros(nomes,num)