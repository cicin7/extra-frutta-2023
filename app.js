
//-----------------------------------------//
//- navigacija scroll desk i mob homepage -//
//-----------------------------------------//

let menuBlock = document.querySelector('menu-block');
let listadesk = menuBlock.querySelector('#listadesk');
let lista = document.getElementById('lista');

// Add the event listener to the listadesk element
listadesk.addEventListener('click', scrollToLista);

function scrollToLista(){
  lista.scrollIntoView({
      behavior: 'smooth'
  });
}


//---------------------------------------//
//---------------- mobmenu --------------//
//---------------------------------------//
var mobtoggle = document.getElementById('mobtoggle');
var mobmenu = document.getElementById('mobmenu');

mobtoggle.addEventListener('click', function(e){
  mobmenu.classList.toggle('toggle');
  mobtoggle.classList.toggle('change');
});


//---------------------------------------//
//---------------- modal ----------------//
//---------------------------------------//
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const modal = document.querySelector("#dialog");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});


// current year
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
