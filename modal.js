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