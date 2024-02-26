import { defaultSetting, setElementStyleProperties } from "./utils.js";

export default class BionicReadHelp extends HTMLElement {
  constructor() {
    super();
    this.content = "";
    this.isBionic = true;
    this.bionicOpacity = defaultSetting.bionicOpacity;
    this.bionicTextColor = defaultSetting.bionicTextColor;
    this.bionicAlgo = defaultSetting.bionicAlgorithm;
    this.bionicToolsBar = {
      dom: defaultSetting.bionicToolsBar.toolbar.dom(),
    };
    this.bionicType = defaultSetting.bionicTypes.static;
  }

  static get tagName() {
    return "wc-bionic-read-help";
  }

  static get attributes() {
    return Object.freeze({
      "brh-opacity": "brh-opacity",
      "brh-algorithm": "brh-algorithm",
      "brh-type": "brh-type",
      "brh-text-color": "brh-text-color",
    });
  }

  static get observedAttributes() {
    return Object.values(BionicReadHelp.attributes);
  }

  connectedCallback() {
    setTimeout(() => {
      this.content = this.#getContent();
      this.#render();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case BionicReadHelp.attributes["brh-opacity"]:
        this.bionicOpacity = Number(newValue) >= 0 ? newValue : 1;
        break;
      case BionicReadHelp.attributes["brh-text-color"]:
        this.bionicTextColor = newValue;
        break;
      case BionicReadHelp.attributes["brh-algorithm"]:
        this.bionicAlgo = newValue
          ? Array.from(newValue.split(" ").map(Number).filter(Boolean))
          : defaultSetting.bionicAlgorithm;
        break;
      case BionicReadHelp.attributes["brh-type"]:
        this.bionicType =
          defaultSetting.bionicTypes[newValue] ||
          defaultSetting.bionicTypes.static;
        break;
    }
  }

  #render() {
    if (this.bionicType === defaultSetting.bionicTypes.interactive) {
      setElementStyleProperties(this, defaultSetting.bionicStyles.global);
    }
    this.#createToolsBar();
    this.updateElement();
  }

  #getContent() {
    return this.innerText
      .trim()
      .split(/\s+/g)
      .filter((a) => a.trim().length > 0);
  }

  updateElement() {
    // ToolsBar
    this.innerHTML = "";
    if (this.bionicType === defaultSetting.bionicTypes.interactive) {
      this.appendChild(this.bionicToolsBar.dom);
    }

    // content color
    this.style.color = this.bionicTextColor;

    // Content
    const textContent = this.isBionic
      ? this.#getBionicContent()
      : this.content.join(" ");
    const span = document.createElement("span");
    span.id = BionicReadHelp.tagName + "-text";
    span.innerHTML = textContent;
    this.appendChild(span);
  }

  #createToolsBar() {
    if (this.bionicType === defaultSetting.bionicTypes.static) return;
    // Get input by their Ids
    const bionicCheckBox = this.bionicToolsBar.dom.querySelector(
      `#${defaultSetting.bionicToolsBar.bionic.id}`
    );
    const inpOpacity = this.bionicToolsBar.dom.querySelector(
      `#${defaultSetting.bionicToolsBar.opacity.id}`
    );
    const inpAlgo = this.bionicToolsBar.dom.querySelector(
      `#${defaultSetting.bionicToolsBar.algorithm.id}`
    );
    const inpTextColor = this.bionicToolsBar.dom.querySelector(
      `#${defaultSetting.bionicToolsBar["text-color"].id}`
    );

    // set inputs events
    bionicCheckBox.checked = this.isBionic;
    bionicCheckBox.onchange = (e) => {
      this.isBionic = e.target.checked;
      inpAlgo.disabled = !this.isBionic;
      inpOpacity.disabled = !this.isBionic;
      inpTextColor.disabled = !this.isBionic;
      this.updateElement();
    };

    inpOpacity.value = this.bionicOpacity;
    inpOpacity.onchange = (e) => {
      this.bionicOpacity = e.target.value;
      this.updateElement();
    };
    inpTextColor.value = this.bionicTextColor;
    inpTextColor.oninput = (e) => {
      this.bionicTextColor = e.target.value;
      this.style.color = this.bionicTextColor;
    };

    // get numeric values from algorithm input data and update its value
    inpAlgo.value = this.bionicAlgo.join(" ");
    inpAlgo.onchange = (e) => {
      const algo = e.target.value;
      this.bionicAlgo = algo
        ? Array.from(algo.split(" ").map(Number).filter(Boolean))
        : defaultSetting.bionicAlgorithm;
      inpAlgo.value = this.bionicAlgo.join(" ");
      this.updateElement();
    };
  }

  #getBionicContent() {
    let bionicContent = [];
    for (let word of this.content) {
      bionicContent.push(this.#bionicWord(word));
    }
    return bionicContent.join(" ");
  }

  #bionicWord(w) {
    let algoCoef = this.bionicAlgo[w.length - 1] || this.bionicAlgo.at(-1);
    let boldChar = Math.ceil(w.length * algoCoef);
    return `<b>${w.slice(0, boldChar)}</b><span style='opacity:${
      this.bionicOpacity
    }'>${w.slice(boldChar)}</span>`;
  }
}

// Add the webComponent to customElements
customElements.define(BionicReadHelp.tagName, BionicReadHelp);
