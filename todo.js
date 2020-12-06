const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    // console.log(event.target.parentNode);

    // toDos.filter를 쓰면 toDos 의 내용중에서 filterFn가 true인 인자를 제거한 뒤 리스트를 리턴한다.
    const cleanTodos = toDos.filter(function(toDo){
        // console.log(toDo.id, li.id); // 숫자와 string으로 되어 비교해봐야 1 !== "1" 이다. 
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanTodos); 
    toDos = cleanTodos;
    saveToDos();
}

function saveToDos(){
    // localStorage.setItem(TODOS_LS, toDos);
    // array즉, JavaScript 객체를 localStorage에 저장할 수 없다. 
    // 오직 String으로만 저장가능하다. 
    // Object를 String으로 바꿔줘야 한다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    // 기존의 html에 있는 객체를 선택하는 querySelector가 아닌!, 
    // html 객체를 직접! 만들어 줄 수 있다!
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;

    const newId = toDos.length+1;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);

    const toDoObj = {
        text : text,
        id :  newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}
function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
         const parsedToDos = JSON.parse(loadedToDos);
         parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
         });
    }
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();