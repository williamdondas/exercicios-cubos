

const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const novoArray = nomes.filter((nome)=>{
    return nome[0].includes("A") || nome[0].includes("a")
  })

  console.log(novoArray)