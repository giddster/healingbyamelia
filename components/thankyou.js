class ThankYou extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var headerContent = this.attributes.headercontent.value;
    var bodyContent = this.attributes.bodycontent.value;
    this.innerHTML = `
        <style>
        .thankyou-content {
            display: flex;
            align-content: center;
            justify-content: center;
            flex-flow: column;
            margin: 400px auto;
            width: 50%;
        }

        h1 {
            color: white;
            font-size: 4em;
        }

        p {
            font-size: 1.5em;
            text-align: center;
        }
        </style>
        
        <div class="thankyou-content">
        
            <h1>${headerContent}</h1>
            <p>${bodyContent}</p>

        </div>
            `;
  }
}

customElements.define("thankyou-component", ThankYou);
