const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const buttonLimparLista = document.querySelector('#apaga-tudo');
const input = document.querySelector('#texto-tarefa');
const olListaTarefas = document.querySelector('#lista-tarefas');
const buttonLimparSelecionado = document.querySelector('#remover-selecionado');
const buttonLimparCompletos = document.querySelector('#remover-finalizados');
const buttonAcima = document.querySelector('#mover-cima');
const buttonAbaixo = document.querySelector('#mover-baixo');
const buttonSave = document.querySelector('#salvar-tarefas');

function addBackground(event) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
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
  const selected = document.querySelector('.selected');

  if (selected) {
    olListaTarefas.removeChild(selected);
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

function saveList() {
  localStorage.setItem('list', olListaTarefas.innerHTML);
}

buttonSave.addEventListener('click', saveList);

if (localStorage.getItem('list')) {
  olListaTarefas.innerHTML = localStorage.getItem('list');
  const tarefas = olListaTarefas.children;
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', addBackground);
    tarefas[index].addEventListener('dblclick', addDecoration);
  }
}

//  Fonte: https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
function moveAcima() {
  const selected = document.querySelector('.selected');
  console.log(selected);

  if (selected === null) {
    alert('Nenhuma tarefa foi selecionada!');
  } else if (selected.previousSibling) {
    const parent = selected.parentNode;
    parent.insertBefore(selected, selected.previousSibling);
  }
}

// Fonte: https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
function moveAbaixo() {
  const selected = document.querySelector('.selected');
  console.log(selected);

  if (selected === null) {
    alert('Nenhuma tarefa foi selecionada!');
  } else if (selected.nextSibling) {
    const parent = selected.parentNode;
    parent.insertBefore(selected.nextSibling, selected);
  }
}

buttonAbaixo.addEventListener('click', moveAbaixo);
buttonAcima.addEventListener('click', moveAcima);
