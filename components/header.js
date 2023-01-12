class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    
    <style>
        #homeIcon {
            color: #E31B1B;
            font-size: 3em;
            padding: 10px;
        }
    </style>
    
    <header>
        <a href="index.html">
            <i class="fa-solid fa-house" id="homeIcon"></i>
        </a>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
