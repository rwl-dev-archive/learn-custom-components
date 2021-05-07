export interface PopupInfoProps {
  text: string
}

export class PopupInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    const info = document.createElement("span");
    info.setAttribute("class", "info");

    const text = this.getAttribute("text");
    info.textContent = text;

    const style = document.createElement("style");
    style.textContent = `
    .wrapper {
      color: red;
    }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(info);
  }
}
