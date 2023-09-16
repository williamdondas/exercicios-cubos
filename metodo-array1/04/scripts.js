const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const paciente = 'william'

const operacao = 'agendar'



function atendimento(listaPacientes,tipoOperacao,nomePaciente){
    if(tipoOperacao === 'agendar'){
        listaPacientes.push(nomePaciente);
        console.log(listaPacientes.join(", "))
    }else{
        listaPacientes.shift();
        console.log(listaPacientes.join(", "))
    }
}

atendimento(pacientes,operacao,paciente)