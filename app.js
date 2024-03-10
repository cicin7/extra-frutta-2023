//---------------------------------------//
//---------------- mobmenu --------------//
//---------------------------------------//
let mobtoggle = document.getElementById('mobtoggle');
let mobmenu = document.getElementById('mobmenu');

mobtoggle.addEventListener('click', function(e){
  mobmenu.classList.toggle('toggle');
  mobtoggle.classList.toggle('change');
});


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


// current year
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
