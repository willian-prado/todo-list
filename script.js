const buttonCriarTarefa = document.getElementById('criar-tarefa');
const buttonLimparLista = document.getElementById('apaga-tudo');
const input = document.getElementById('texto-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');
const buttonLimparSelecionado = document.getElementById('remover-finalizados');

function addBackground(event) {
  const marked = document.querySelector('.marked');

  if (marked) {
    marked.classList.remove('marked');
    event.target.classList.add('marked');
  } else {
    event.target.classList.add('marked');
  }
}

function addDecoration(event) {
  const item = event.target;

  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}

function criaTarefa() {
  const tarefa = document.createElement('li');

  tarefa.innerText = input.value;
  tarefa.className = 'tarefa';
  tarefa.addEventListener('click', addBackground);
  tarefa.addEventListener('dblclick', addDecoration);
  olListaTarefas.appendChild(tarefa);
  input.value = '';
}

buttonCriarTarefa.addEventListener('click', criaTarefa);

function limparLista() {
  olListaTarefas.innerHTML = '';
}

buttonLimparLista.addEventListener('click', limparLista);

function removeSelecionado(event) {
  const marked = document.querySelector('.marked');

  if (marked) {
    olListaTarefas.removeChild(marked);
  }
}

buttonLimparSelecionado.addEventListener('click', removeSelecionado);