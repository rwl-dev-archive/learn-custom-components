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
  [key: string]: any
}

