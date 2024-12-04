// ACCEDER A UN ELEMENTO HTML mediante el DOM
const elementBurger = document.querySelector(".fa-bars");
const elementDialog = document.querySelector("dialog");

const elementClose = document.querySelector(".close");
//Para ver las tripas de JS, solo un elemento por consulta
console.dir(elementBurger);
console.dir(elementDialog);
// LISTENER PARA EL EVENTO
function handlerClick() {
  elementDialog.showModal();
}
function handlerClose() {
  elementDialog.close();
}
elementBurger.addEventListener("click", handlerClick);
elementClose.addEventListener("click", handlerClose);
