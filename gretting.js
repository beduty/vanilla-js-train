const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 부모로 이벤트가 올라가는 것을 방지한다.
    const currentValue = input.value;
    paintGreeting(currentValue); // 화면에 띄운다. 

    // currentValue를 localStorage에 저장해야한다. 
    saveName(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_ON); 
    form.addEventListener("submit", handleSubmit);
    // -> form 에서 발생한 이벤트는 form에서 동작을마치면 부모로 부모로 전달되어 root까지 올라간다.
    //  --> 이를 막아줄 필요가 있다. 
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText =`Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();