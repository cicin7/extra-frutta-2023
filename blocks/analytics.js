// ga-web-component.js
class GoogleAnalytics extends HTMLElement {
    constructor() {
      super();
      this.trackingID = this.getAttribute('tracking-id');
    }
  
    connectedCallback() {
      if (this.trackingID) {
        this.setupGoogleAnalytics();
      } else {
        console.error("Google Analytics: Missing 'tracking-id' attribute.");
      }
    }
  
    setupGoogleAnalytics() {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingID}`;
      script.async = true;
  
      const configScript = document.createElement('script');
      configScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
  
        gtag('config', '${this.trackingID}');
      `;
  
      document.head.appendChild(script);
      document.head.appendChild(configScript);
    }
  }
  
  customElements.define('google-analytics', GoogleAnalytics);
  