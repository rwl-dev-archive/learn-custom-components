import { controller, attr, target } from "@github/catalyst";

@controller
export class ColorTextElement extends HTMLElement {
  @target output: HTMLElement;
  @attr name = "といか";
  @attr color = "blue"
  connectedCallback() {
    this.output.style.color = this.color;
    this.output.textContent = `あそまか ${this.name}`;
  }
}
