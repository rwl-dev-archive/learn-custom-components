import { newSpecPage } from '@stencil/core/testing';
import { ColorText } from './color-text';

describe('color-text', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ColorText],
      html: '<color-text></color-text>',
    });
    expect(root).toEqualHtml(`
      <color-text>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </color-text>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ColorText],
      html: `<color-text first="Stencil" last="'Don't call me a framework' JS"></color-text>`,
    });
    expect(root).toEqualHtml(`
      <color-text first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </color-text>
    `);
  });
});
