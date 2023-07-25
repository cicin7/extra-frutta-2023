
//-----------------------------------------//
//- navigacija scroll desk i mob homepage -//
//-----------------------------------------//
let listadesk = document.getElementById('listadesk');

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


// brojači
let speed = 10;

/* Call this function with a string containing the ID name to
* the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
elt = document.getElementById(id);
endNbr = Number(document.getElementById(id).innerHTML);
incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
if (i <= endNbr) {
  elt.innerHTML = i;
  setTimeout(function() {//Delay a bit before calling the function again.
    incNbrRec(i + 1, endNbr, elt);
  }, speed);
}
}

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    incEltNbr("nbr");
    incEltNbr("nbrr");
    observer.unobserve(entry.target); // stop observing once animation starts
  }
});
});

const uspjehSection = document.querySelector('.uspjeh-section');
observer.observe(uspjehSection);

incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/
incEltNbr("nbrr");


// current year
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
