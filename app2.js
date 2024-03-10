//---------------------------------------//
//---------------- mobmenu --------------//
//---------------------------------------//
let mobtoggle = document.getElementById('mobtoggle');
let mobmenu = document.getElementById('mobmenu');

mobtoggle.addEventListener('click', function(e){
  mobmenu.classList.toggle('toggle');
  mobtoggle.classList.toggle('change');
});

let vocedesk = document.getElementById('vocedesk');
let vocemob = document.getElementById('vocemob');
let tablica = document.getElementById('tablica');

// scroll do tablice
function scrollToTablica(){
  if(mobmenu.classList.contains('toggle')){
      mobmenu.classList.remove('toggle');
      mobtoggle.classList.remove('change');
  }
  tablica.scrollIntoView({
      behavior: 'smooth'
  });
}

vocemob.addEventListener('click', scrollToTablica)
vocedesk.addEventListener('click', scrollToTablica)


// scroll do liste
let listadesk = document.getElementById('listadesk');
let listamob = document.getElementById('listamob');
let lista = document.getElementById('lista');

function scrollToLista(){
  if(mobmenu.classList.contains('toggle')){
      mobmenu.classList.remove('toggle');
      mobtoggle.classList.remove('change');
  }
  lista.scrollIntoView({
      behavior: 'smooth'
  });
}

listamob.addEventListener('click', scrollToLista)
listadesk.addEventListener('click', scrollToLista)


// scroll do kontakta
let kontaktdesk = document.getElementById('kontaktdesk');
let kontaktmob = document.getElementById('kontaktmob');
let kako = document.getElementById('kako');

function scrollToKontakt(){
  if(mobmenu.classList.contains('toggle')){
      mobmenu.classList.remove('toggle');
      mobtoggle.classList.remove('change');
  }
  kako.scrollIntoView({
      behavior: 'smooth'
  });
}

kontaktmob.addEventListener('click', scrollToKontakt)
kontaktdesk.addEventListener('click', scrollToKontakt)


// scroll do onama
let onamadesk = document.getElementById('onamadesk');
let onamamob = document.getElementById('onamamob');
let onama = document.getElementById('onama');

function scrollToOnama(){
  if(mobmenu.classList.contains('toggle')){
      mobmenu.classList.remove('toggle');
      mobtoggle.classList.remove('change');
  }
  onama.scrollIntoView({
      behavior: 'smooth'
  });
}

onamamob.addEventListener('click', scrollToOnama)
onamadesk.addEventListener('click', scrollToOnama)



// current year
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;


  // Get the menu element
const menu = document.querySelector('.menu');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    menu.classList.add('fixed-menu');
  } else {
    menu.classList.remove('fixed-menu');
  }
});
