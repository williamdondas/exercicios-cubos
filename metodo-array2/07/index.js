
const endereços = [
    { cep: 33111222, rua: "Rua dos Artistas" },
    { cep: 44111333, rua: "Rua Augusta" },
    { cep: 55222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];


  let resultado
  function buscaCep(cepInformado){
    resultado = endereços.find((endereço)=>{
        return endereço.cep ===cepInformado
    })
    console.log(resultado)
  }

  buscaCep(33111222)


