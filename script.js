const buttonCriarTarefa = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

function addBackground(event) {
  const marked = document.querySelector('.marked');

  if (marked) {
    marked.classList.remove('marked');
    event.target.classList.add('marked');
  } else {
    event.target.classList.add('marked');
  }
}

function criaTarefa() {
  const olListaTarefas = document.getElementById('lista-tarefas');
  const tarefa = document.createElement('li');

  tarefa.innerText = input.value;
  tarefa.className = 'tarefa';
  tarefa.addEventListener('click', addBackground);
  olListaTarefas.appendChild(tarefa);
  input.value = '';
}

buttonCriarTarefa.addEventListener('click', criaTarefa);
