const buttonCriarTarefa = document.getElementById('criar-tarefa');
const buttonLimparLista = document.getElementById('apaga-tudo');
const input = document.getElementById('texto-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');
const buttonLimparSelecionado = document.getElementById('remover-selecionado');
const buttonLimparCompletos = document.getElementById('remover-finalizados');
const buttonAcima = document.getElementById('mover-cima');
const buttonAbaixo = document.getElementById('mover-baixo');
const buttonSave = document.getElementById('salvar-tarefas');

olListaTarefas.innerHTML = localStorage.getItem('list');

function addBackground(event) {
  const marked = document.querySelector('.marked');
  const item = event.target;

  if (item.classList.contains('marked')) {
    item.classList.remove('marked');
  } else if (marked) {
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

function removeSelecionado() {
  const marked = document.querySelector('.marked');

  if (marked) {
    olListaTarefas.removeChild(marked);
  } else {
    alert('Nenhuma tarefa selecionada');
  }
}

buttonLimparSelecionado.addEventListener('click', removeSelecionado);

function removeCompletos() {
  const completos = document.querySelectorAll('.completed');

  if (completos.length === 0) {
    alert('Nenhuma tarefa foi marcada como completa.');
  } else {
    for (let index = 0; index < completos.length; index += 1) {
      olListaTarefas.removeChild(completos[index]);
    }
  }
}

buttonLimparCompletos.addEventListener('click', removeCompletos);

function moveAcima() {
  const item = document.querySelector('.marked');

  if (item) {
    if (item.previousElementSibling) {
      item.parentElement.insertBefore(item, item.previousElementSibling);
    }
  } else {
    alert('Nenhum item selecionado');
  }
}

buttonAcima.addEventListener('click', moveAcima);

function moveAbaixo() {
  const item = document.querySelector('.marked');

  if (item) {
    if (item.nextElementSibling) {
      item.parentElement.insertBefore(item.nextElementSibling, item);
    }
  } else {
    alert('Nenhum item selecionado');
  }
}

buttonAbaixo.addEventListener('click', moveAbaixo);

function saveList() {
  localStorage.setItem('list', olListaTarefas.innerHTML);
}

buttonSave.addEventListener('click', saveList);
