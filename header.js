const template_header = document.getElementById('component-header')

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template_header, 'header-component') 

class HeaderComponent extends HTMLElement {
  constructor() {
    super()
    
  }
  
  connectedCallback() {
    window.ShadyCSS && window.ShadyCSS.styleElement(this)
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template_header.content.cloneNode(true))
    }
  }
}

window.WebComponents.waitFor(() => customElements.define('header-component', HeaderComponent))
