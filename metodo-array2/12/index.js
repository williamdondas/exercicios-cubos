const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];

  const programadoresMaisDe20 = pessoas.filter((pessoa)=>{
    return pessoa.profissao === 'Programador' && pessoa.idade>20
  })

  console.log(programadoresMaisDe20)

  const jornalistasMaisDe30 = pessoas.filter((pessoa)=>{
    return pessoa.profissao === 'Jornalista' && pessoa.idade>30
  })

  console.log(jornalistasMaisDe30)

  const jornalistaEProgramadorJovem = pessoas.filter((pessoa)=>{
    return pessoa.profissao === 'Jornalista' && pessoa.idade<29 || pessoa.profissao ==='Programador' && pessoa.idade<29
  })

  console.log(jornalistaEProgramadorJovem)
