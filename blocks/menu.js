class menu extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
    <menu class="menu">

      <!----- nav desk -----> 
      <div class="deskmenu">
        <div class="logo"><img src="../../img/extra-frutta-logo-transparent.png" alt="Extra Frutta logotip"></div>
        <ul class="deskwrap">
          <li class="deskitem"> <a style="color:#0F5530;" href="./index.html"> Početna </a> </li>
          <li class="menuicon menuicon-1"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="./index.html#lista"> Lista proizvoda </a> </li>
          <li class="menuicon menuicon-2"></li>
          <li class="deskitem" id="listadesk"> <a style="color:#0F5530;" href="./index.html#tablica"> Voće i Povrće </a> </li>
          <!-- 
          <li class="menuicon menuicon-3"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="./index.html#kako"> Kako naručiti </a> </li>
          -->
          <li class="menuicon menuicon-4"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="./index.html#kako"> Kontakt </a> </li>
          <li class="menuicon menuicon-5"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="./index.html#onama"> O nama </a> </li>
        </ul>
      </div>

      <!----- nav mob -----> 
      <div class="logomob"><img src="../../img/extra-frutta-logo-transparent.png" alt="Extra Frutta logotip"></div>
      <div class="mobnav">
        <div class="barholder" id="mobtoggle">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>

      <!----- nav mob -----> 
      <div class="mobmenu" id="mobmenu">
        <ul class="mobwrap">
          <li class="mobitem"> <a style="color:#fff;" href="./index.html"> Početna </a> </li>
          <li class="menuicon menuicon-1"></li>
          <li class="mobitem"> <a style="color:#fff;" href="./index.html#lista"> Lista proizvoda </a> </li>
          <li class="menuicon menuicon-2"></li>
          <li class="mobitem"> <a style="color:#fff;" href="./index.html#tablica"> Voće i Povrće </a> </li>
          <!-- 
          <li class="menuicon menuicon-3"></li>
          <li class="mobitem"> <a style="color:#fff;" href="./index.html#kako"> Kako naručiti </a> </li>
          -->
          <li class="menuicon menuicon-4"></li>
          <li class="mobitem"> <a style="color:#fff;" href="./index.html#kako"> Kontakt </a> </li>
          <li class="menuicon menuicon-5"></li>
          <li class="mobitem"> <a style="color:#fff;" href="./index.html#onama"> O nama </a> </li>
        </ul>
      </div>

    </menu>
    `;
  }
}

customElements.define('menu-block', menu);

