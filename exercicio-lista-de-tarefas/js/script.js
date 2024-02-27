//elemetos que serão manipulados
const botao = document.querySelector(".adiciona");
const newItens = document.querySelector(".new-itens");
const container = document.querySelector(".container");
const item = document.querySelector(".entrada-tarefa");

//funções de criação
function createElements() {
  const li = document.createElement("li");
  li.setAttribute("class", "tarefa");
  return li;
}

function createButton(newLi) {
  newLi.innerText += " ";
  const button = document.createElement("button");
  button.innerText = "Apagar";
  button.setAttribute("class", "apagar", "tittle", "Apagar");
  newLi.appendChild(button);
}

//funções de manipulação
function salvarTarefas() {
  const liTarefas = newItens.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    adicionaTarefa(tarefa);
  }
}

function cleanInput() {
  item.value = "";
  item.focus();
}

function adicionaTarefa(valeuText) {
  const newLi = createElements();
  newLi.innerText = valeuText;
  newItens.appendChild(newLi);
  cleanInput();
  createButton(newLi);
  salvarTarefas();
}

//add eventos
botao.addEventListener("click", () => {
  if (!item.value) return;
  adicionaTarefa(item.value);
});

item.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!item.value) return;
    adicionaTarefa(item.value);
  }
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

adicionaTarefasSalvas();
