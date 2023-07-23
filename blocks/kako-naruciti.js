class kakoNaruciti extends HTMLElement {
    constructor() {
      super();
      
      this.innerHTML = `
      <div class="kako-naruciti">

        <div class="kako-naruciti-wrap-1">
    
            <div class="kako-naruciti-wrap-2">
                    <h1 id="kako" class="lista-proizvoda kako-naruciti-naslov">
                      Kako naručiti?
                    </h1>
                    <p class="kako-naruciti-opis">
                      Nakon što se odlučite o proizvodu/paketu koji želite naručiti kontaktirajte nas na mail ili broj telefona. Također ćemo Vam odgovoriti na sve nejasnoće i pitanja koja imate.
                    </p>
    
                    <div class="kontakt-wrap">
                      <div class="kontakt-grid">
                        <div class="kontakt-info"> 
                          <h2>Email:</h2>
                          <p>extrafruttads@gmail.com</p>
                        </div>
                      </div>
    
                      <div id="kontakt" class="kontakt-grid">
                        <div class="kontakt-info">
                          <h2>Kontakt broj:</h2>
                          <p>Saša: +38595 8585 746</p>
                          <p>Dijana: +38595 8811 070</p>
                        </div>
                      </div>
    
                      <div class="kontakt-grid">
                        <div class="kontakt-info">
                          <h2>Način plaćanja:</h2>
                          <p>R1 gotovinsko</p>
                          <p>Virman</p>
                        </div>
                      </div>
                    </div>
            </div>
    
        </div>
  
      </div>
      `;
    }
  }

  customElements.define('kako-naruciti', kakoNaruciti);