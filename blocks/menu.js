const baseURL = 'https://extrafrutta.hr';

class menu extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
    <menu class="menu">

      <!----- nav desk -----> 
      <div class="deskmenu">
        <a href="${baseURL}" class="logo"><img src="${baseURL}/img/extra-frutta-logo-transparent.png" alt="Extra Frutta logotip"></a>
        <ul class="deskwrap">
          <li class="deskitem"> <a style="color:#0F5530;" href="${baseURL}"> Početna </a> </li>
          <li class="menuicon menuicon-1"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="${baseURL}#tablica"> Voće i Povrće </a> </li>
          <li class="menuicon menuicon-2"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="${baseURL}#lista"> Lista proizvoda </a> </li>
          <!-- 
          <li class="menuicon menuicon-3"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="${baseURL}#kako"> Kako naručiti </a> </li>
          -->
          <li class="menuicon menuicon-4"></li>
          <li class="deskitem" id="kontaktdesk"> Kontakt </li>
          <li class="menuicon menuicon-5"></li>
          <li class="deskitem"> <a style="color:#0F5530;" href="${baseURL}#onama"> O nama </a> </li>
        </ul>
      </div>

      <!----- nav mob -----> 
      <div class="logomob"><a href="${baseURL}" class="logo"><img src="${baseURL}/img/extra-frutta-logo-transparent.png" alt="Extra Frutta logotip"></a></div>
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
          <li class="mobitem"> <a style="color:#fff;" href="${baseURL}"> Početna </a> </li>
          <li class="menuicon menuicon-1"></li>
          <li class="mobitem"> <a style="color:#fff;" href="${baseURL}#tablica"> Voće i Povrće </a> </li>
          <li class="menuicon menuicon-2"></li>
          <li class="mobitem"> <a style="color:#fff;" href="${baseURL}#lista"> Lista proizvoda </a> </li>
          <!-- 
          <li class="menuicon menuicon-3"></li>
          <li class="mobitem"> <a style="color:#fff;" href="${baseURL}#kako"> Kako naručiti </a> </li>
          -->
          <li class="menuicon menuicon-4"></li>
          <li class="mobitem" id="kontaktmob"> Kontakt </li>
          <li class="menuicon menuicon-5"></li>
          <li class="mobitem"> <a style="color:#fff;" href="${baseURL}#onama"> O nama </a> </li>
        </ul>
      </div>

    </menu>
    `;
  }
}

customElements.define('menu-block', menu);

