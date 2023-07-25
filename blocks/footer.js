class footer extends HTMLElement {
    constructor() {
      super();
      
      this.innerHTML = `
      <footer>

            <div class="footer-kontakt">
                <div class="footer-wrapper">

                    <div class="footer-linkovi">
                        <h3 class="kontakt-head">
                          Radno vrijeme:
                        </h3>
                        <p class="kontakt-broj">Ponedjeljak - Petak:<b>&nbsp;6:00 - 14:00</b></p>
                        <p class="kontakt-broj">Subota:<b>&nbsp;6:00 - 12:00</b></p>
                        <p class="kontakt-broj">Nedjelja:<b>&nbsp;ne radimo</b></p> 
                    </div>
                    <div class="footer-linkovi">
                        <h3 class="kontakt-head">
                            Lokacija:
                        </h3>
                        <p class="kontakt-broj">
                          Milovana Gavazzija 2, 10040, Zagreb
                        </p>
                    </div>
                    <div class="footer-linkovi">
                      <h3 class="kontakt-head">
                          Korisni linkovi:
                      </h3>
                      <p class="kontakt-broj">
                        <a href="${baseURL}/uvjeti-koristenja.html">Uvjeti korištenja</a>
                      </p>
                      <p class="kontakt-broj">
                      <a href="${baseURL}/politika-privatnosti.html">Politika privatnosti</a>
                      </p>
                      <p class="kontakt-broj">
                      <a href="${baseURL}/linkovi.html">Linkovi</a>
                      </p>
                    </div>
                    <div class="footer-linkovi">
                        <h3 class="kontakt-head">
                          Naš partner
                        </h3>
                        <img src="${baseURL}/img/vervita-logo.webp" alt="Vervita logo/logotip">
                    </div>

                </div>
            </div>

            <div class="copyright">
                <div class="bottom-links">
                    © Extra Frutta 2023<span id="current-year"></span>. Sva prava pridržana
                </div>
            </div>

  </footer>
      `;
    }
  }

  customElements.define('footer-block', footer);

  // <div class="bottom-links-cro">
  //     { Dizajn i izrada stranice: <a href="">cro7</a> }
  // </div>