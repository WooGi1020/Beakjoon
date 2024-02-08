const list = document.querySelector('.list ul');
const listInput = document.querySelector('.list-input');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDo(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintList(newtodo){
  const listValue = document.createElement('li');
  const liBtn = document.createElement('button');
  listValue.id = newtodo.id;
  listValue.textContent = newtodo.text;

  liBtn.textContent = 'X';
  list.appendChild(listValue);
  listValue.appendChild(liBtn);
  liBtn.addEventListener('click', deleteTodo);

}

function addList(event){
  if(event.key == 'Enter'){
    const newToDo = listInput.value;
    listInput.value = '';

    const newToDoObj = {
      text:newToDo,
      id:Date.now()
    };
    toDos.push(newToDoObj);
    paintList(newToDoObj);
    saveToDo();
  }
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();
}

const savedToDo = localStorage.getItem(TODOS_KEY);
console.log(savedToDo);

if(savedToDo !== null){
  const parsedToDo = JSON.parse(savedToDo);
  console.log(parsedToDo);
  toDos = parsedToDo;
  parsedToDo.forEach(paintList);
}

listInput.addEventListener('keypress', addList);