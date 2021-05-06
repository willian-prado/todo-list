const buttonCriarTarefa = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

function criaTarefa() {
  const olListaTarefas = document.getElementById('lista-tarefas');
  const tarefa = document.createElement('li');

  tarefa.innerText = input.value;
  olListaTarefas.appendChild(tarefa);
  input.value = '';
}

buttonCriarTarefa.addEventListener('click', criaTarefa);
