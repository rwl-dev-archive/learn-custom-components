import { PropertiesHyphen } from 'csstype';

/**
 * 頭文字を小文字に変換する
 */
const initialTextToLowerCase = (conponentName: string): string =>
  conponentName.slice(0, 1).toLowerCase() + conponentName.slice(1);

/**
 * 大文字の前にハイフンを追加し、大文字を小文字に変換する
 */
const addHyphenBeforeUpperCaseText = (componentName: string): string =>
  [...componentName]
    .map((text: string) =>
      /^[A-Z]+$/g.test(text) ? `-${text.toLowerCase()}` : text
    )
    .join('');

/**
 * Class名からタグ名を引き出す
 */
export const tagname = (conponentName: string): string =>
  addHyphenBeforeUpperCaseText(initialTextToLowerCase(conponentName));

interface defaultProps {
  [key: string]: string;
}

export interface DefaultClass {
  // eslint-disable-next-line no-undef
  selector: keyof HTMLElementTagNameMap | string;
  properties: PropertiesHyphen;
}

export type DefaultClasses = DefaultClass[];

/**
 * オブジェクトを受け取ってCSSの属性（`key: value; `）に整形する
 */
export const shapedCssProperties = (properties: PropertiesHyphen): string => {
  const propertieList: string[] = [];
  for (const [key, value] of Object.entries(properties)) {
    propertieList.push(`${key}: ${value}`);
  }

  return `${propertieList.join('; ')}`;
};

/**
 * オブジェクトをもとにCSSの文字列を返す
 */
export const getCss = (cssList: DefaultClasses): string =>
  cssList
    .map(css => {
      let shapedString: string = '';
      shapedString += `${css.selector} ${shapedCssProperties(css.properties)}`;
      return shapedString;
    })
    .join('');

/**
 * Propsを受け取ってHTMLタグの属性（`key="value"`）として返す
 */
const extractProps = <T = defaultProps>(props: T): string => {
  const propsList: string[] = [];
  for (const [key, value] of Object.entries(props)) {
    propsList.push(`${key}="${value}"`);
  }
  return propsList.join(' ');
};

/**
 * HTMLタグを生成する
 */
export const generateElement = <T = defaultProps>(
  // eslint-disable-next-line no-undef
  constructor: CustomElementConstructor,
  props: T,
  slot: string
): string =>
  `<${tagname(constructor.name)} ${extractProps(props)} />${slot}</${tagname(
    constructor.name
  )}>`;
