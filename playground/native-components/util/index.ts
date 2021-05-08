/**
 * 頭文字を小文字に変換する
 */
const initialTextToLowerCase = (conponentName: string): string =>
  conponentName.slice(0, 1).toLowerCase() + conponentName.slice(1);

/**
 * 大文字の前にハイフンを追加し、大文字を小文字に変換する
 */
const addHyphenBeforeUpperCaseText = (componentName: string): string => {
  return [...componentName]
    .map((text: string) =>
      /^[A-Z]+$/g.test(text) ? `-${text.toLowerCase()}` : text
    )
    .join("");
};

/**
 * Class名からタグ名を引き出す
 */
export const tagname = (conponentName: string): string =>
  addHyphenBeforeUpperCaseText(initialTextToLowerCase(conponentName));

interface defaultProps {
  [key: string]: string;
}

/**
 * Propsを受け取ってHTMLタグの属性（`key="value"`）として返す
 */
const extractProps = <T = defaultProps>(props: T): string => {
  let propsList: string[] = [];
  for (const prop in props) {
    propsList.push(`${prop}="${props[prop]}"`);
  }
  return propsList.join(" ");
};

/**
 * HTMLタグを生成する
 */
export const generateElement = <T = defaultProps>(
  constructor: CustomElementConstructor,
  props: T
) => `<${tagname(constructor.name)} ${extractProps(props)}></${tagname(constructor.name)}>`;
