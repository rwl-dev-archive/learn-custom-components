import { PopupInfo } from "./components/popup-info";
import type { PopupInfoProps } from "./components/popup-info";
import { tagname, generateElement } from "./util";
import "./style.scss";

const popupInfoProps: PopupInfoProps = {
  text: "あそまか といか",
};

customElements.define(tagname(PopupInfo.name), PopupInfo);

document.querySelector("#app").innerHTML = `
  ${generateElement<PopupInfoProps>(PopupInfo, popupInfoProps, "あいうえお")}
`;
