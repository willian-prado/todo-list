### Projeto Todo List

Quarto projeto do módulo de Fundamentos do curso de desenvolvimento web da Trybe. \
Similarmente ao projeto Pixels Art, foi realizado para integrar os conhecimentos de HTML, CSS e JavaScript.

**Objetivo do projeto**

Implementar uma página web que corresponde a uma lista de tarefas. Os usuários devem poder adicionar e remover tarefas, marcar 
tarefas finalizadas, limpar tarefas concluídas e salvar a lista de tarefas no localStorage.

**Principais habilidades desenvolvidas nesse trabalho:**

- Manipulação do DOM, usando seletores como `getElementById`, `getElementsByTagName`, `querySelector` e `querySelectorAll`;
- Criação de `event listeners` que permitem a interação com elementos da página;
- Utilizar funções e métodos da linguagem JavaScript;

---

### Lista de requisitos propostos:

#### Obrigatórios

**1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag `header`**

**2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"**

**3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista**

**4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"**

**5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo**

**6 - Ordene os itens da lista de tarefas por ordem de criação**

**7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)**

**8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo**

**9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item**

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor `line-through solid rgb(0, 0, 0)`.

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

**10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista**

**11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista**

#### Bônus

**12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava**

**13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas**

    Pontos importantes sobre este requisito bônus:

    * Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

    * Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?        Note que caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada.

**14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado**
