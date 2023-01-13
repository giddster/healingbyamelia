class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        footer {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }    

        h2, h3 {
            text-align: center;
            margin: 0;
            color: #c21c1c;
        }
    
        h2 {
            font-size: 4em;
        }

        h3 {
            font-size: 2em;
        }
    </style>
    
    <footer>
        <h2> 異体同心 </h2>
        <h3> Two bodies, same heart </h3>
    </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
