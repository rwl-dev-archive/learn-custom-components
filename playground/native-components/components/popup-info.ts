import { getCss } from "../util";
import type { DefaultClasses } from "../util";

export interface PopupInfoProps {
  text: string;
}

const defaultClass: DefaultClasses = [
  {
    selector: ".wrapper",
    properties: {
      color: "red",
    },
  },
];

export class PopupInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    const info = document.createElement("span");
    info.setAttribute("class", "info");

    const text = this.getAttribute("text");
    info.textContent = text;

    const style = document.createElement("style");
    style.textContent = getCss(defaultClass);

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(info);
    wrapper.appendChild(slot);
  }
}
