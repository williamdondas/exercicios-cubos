const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const paciente = 'WIlliam'
const paciente2 = 'João'


function agendarPaciente(arrayPacientes,nomePaciente){
    arrayPacientes.push(nomePaciente);
    console.log(arrayPacientes.join(", "))
}

agendarPaciente(pacientes,paciente);

function atenderPaciente(arrayPacientes){
    arrayPacientes.shift()
    console.log(arrayPacientes.join(", "))
}

atenderPaciente(pacientes)

function cancelarAtendimento(nomePaciente){
   pacientes.splice(pacientes.indexOf(nomePaciente),1)
    console.log(pacientes.join(', '))
}

cancelarAtendimento(paciente2)