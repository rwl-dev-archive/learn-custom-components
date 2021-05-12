import { ColorText, ColorTextProps } from "./components/color-text";
import { tagname, generateElement } from "./util";
import "./style.scss";

const ColorTextProps: ColorTextProps = {
  text: "あそまか といか",
};

customElements.define(tagname(ColorText.name), ColorText);

document.querySelector("#app").innerHTML = `
  ${generateElement<ColorTextProps>(ColorText, ColorTextProps, "あいうえお")}
`;
