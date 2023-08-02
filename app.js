//-----------------------------------------//
//- navigacija scroll desk i mob homepage -//
//-----------------------------------------//

let menuBlock = document.querySelector('menu-block');
let listadesk = menuBlock.querySelector('#listadesk');
let lista = document.querySelector('#lista');

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


// current year
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
