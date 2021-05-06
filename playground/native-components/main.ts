import { PopupInfo } from "./components/popup-info";
import { tagname } from './util';
import "./style.scss";

customElements.define(tagname(PopupInfo.name), PopupInfo);

document.querySelector("#app").innerHTML = `
  <${tagname(PopupInfo.name)} text="あそまか といか" />
`;
