export const defaultSetting = {
  get bionicAlgorithm() {
    return [-1, 0.25, 0.25, 0.35, 0.5, 0.65];
  },
  get bionicTypes() {
    return { static: "static", interactive: "interactive" };
  },
  get bionicOpacity() {
    return 0.75;
  },
  get bionicTextColor() {
    return "#000";
  },
  get bionicStyles() {
    return {
      global: {
        display: "flex",
        "flex-direction": "column",
        border: "1px solid #a9a9a9",
        "border-radius": " 0.5rem",
        padding: "5px",
        overflow: "hidden",
        "text-align": "justify",
      },
      label: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        gap: "10px",
        "background-color": "#c5c5c5",
        color: "#000",
        padding: "5px 10px",
        "border-radius": "0.5rem",
        border: "1px solid #a0a0a0",
        "margin-top": "0.25rem",
        height: "1.5rem",
        "max-height": "2rem",
      },
      toolbar: {
        padding: "inherit",
        "background-color": "#d9d9d9",
        "margin-left": "-0.65rem",
        "margin-top": "-0.65rem",
        "margin-right": "-0.65rem",
        "margin-bottom": "0.75rem",
        display: "flex",
        "flex-wrap": "wrap",
        "flex-direction": "row",
        "justify-content": "space-around",
        "align-items": "center",
        "border-bottom": "1px solid #cecece",
      },
      input: {
        display: "flex",
        padding: "5px 0px",
        "text-align": "center",
        "border-radius": "0.25rem",
        "background-color": "#fff",
        border: "1px solid #a0a0a0",
      },
    };
  },
  get bionicToolsBar() {
    return {
      toolbar: {
        dom: () => {
          let bar = document.createElement("span");
          bar.id = "wc-bionic-toolbar";
          setElementStyleProperties(bar, defaultSetting.bionicStyles.toolbar);
          [
            defaultSetting.bionicToolsBar.bionic.dom(),
            defaultSetting.bionicToolsBar.opacity.dom(),
            defaultSetting.bionicToolsBar.algorithm.dom(),
            defaultSetting.bionicToolsBar["text-color"].dom(),
          ].map((dom) => bar.appendChild(dom));
          bar.setAttribute("part", bar.id);
          return bar;
        },
      },
      bionic: {
        id: "bionic-check",
        dom: () => {
          let label = document.createElement("label");
          label.textContent = "Bionic";
          let inp = document.createElement("input");
          inp.type = "checkbox";
          inp.id = defaultSetting.bionicToolsBar.bionic.id;
          setElementStyleProperties(inp, defaultSetting.bionicStyles.input);
          label.appendChild(inp);
          setElementStyleProperties(label, defaultSetting.bionicStyles.label);
          return label;
        },
      },
      opacity: {
        id: "bionic-opacity",
        dom: () => {
          let label = document.createElement("label");
          label.textContent = "Opacity";
          let inp = document.createElement("input");
          inp.id = defaultSetting.bionicToolsBar.opacity.id;
          inp.type = "range";
          inp.min = 0;
          inp.max = 1;
          inp.step = 0.01;
          setElementStyleProperties(inp, defaultSetting.bionicStyles.input);
          setElementStyleProperties(label, defaultSetting.bionicStyles.label);
          label.appendChild(inp);
          return label;
        },
      },
      "text-color": {
        id: "bionic-text-color",
        dom: () => {
          let label = document.createElement("label");
          label.textContent = "Text color";
          let inp = document.createElement("input");
          inp.id = defaultSetting.bionicToolsBar["text-color"].id;
          inp.type = "color";
          setElementStyleProperties(label, defaultSetting.bionicStyles.label);
          label.appendChild(inp);
          return label;
        },
      },
      algorithm: {
        id: "bionic-algorithm",
        dom: () => {
          let label = document.createElement("label");
          label.textContent = "Algorithm";
          let inp = document.createElement("input");
          inp.type = "text";
          inp.id = defaultSetting.bionicToolsBar.algorithm.id;
          setElementStyleProperties(inp, defaultSetting.bionicStyles.input);
          setElementStyleProperties(label, defaultSetting.bionicStyles.label);
          label.appendChild(inp);
          return label;
        },
      },
    };
  },
};

export function setElementStyleProperties(el, style) {
  for (const property in style) {
    el.style[property] = style[property];
  }
}

export function toggleAttribute(el, name) {
  el.toggleAttribute(name);
}
