const inputForm = document.getElementById("login");
const loginInput = document.getElementById("name-input");
const hello = document.getElementById("hello");

const HIDDEN_CLASSNAME = "hidden";

function onNameSubmit(event) {
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem("Name", name);
    console.log(name);
    inputForm.classList.add(HIDDEN_CLASSNAME);
    resultShow(name);
  }

function resultShow(inputName){
    hello.innerText = `Hello, ${inputName}`;
}

const savedName = localStorage.getItem("Name");

if (savedName === null) {
    inputForm.classList.remove(HIDDEN_CLASSNAME);
}
else{
    resultShow(savedName);
}

inputForm.addEventListener("submit", onNameSubmit);