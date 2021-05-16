import { html, LitElement, property } from 'lit-element';
import { PropertiesHyphen } from 'csstype';
import { shapedCssProperties } from '../util/index.js';

export class ColorText extends LitElement {
  @property({ type: String }) color = 'red';

  private cssValues: PropertiesHyphen = {
    color: this.color,
  };

  render() {
    return html`
      <span style="${shapedCssProperties(this.cssValues)}"
        >あそまか といか</span
      >
    `;
  }
}
