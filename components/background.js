class Background extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .bg {
        position: fixed;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        z-index: -1;
    }
    
    .bg img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        min-width: 50%;
        min-height: 50%;
    }
      </style>
      <div class="bg">
            <img src="/assets/background5.png" alt="">
        </div>
          `;
  }
}

customElements.define("background-component", Background);
