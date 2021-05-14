import { newE2EPage } from '@stencil/core/testing';

describe('color-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<color-text></color-text>');
    const element = await page.find('color-text');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<color-text></color-text>');
    const component = await page.find('color-text');
    const element = await page.find('color-text >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
