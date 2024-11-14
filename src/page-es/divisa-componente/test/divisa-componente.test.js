
import { expect, it, describe } from 'vitest';
import { html, fixture } from '@open-wc/testing-helpers';
import '../src/divisa-componente.js';
    
describe('DivisaComponente', () => {
  it('debería renderizar un párrafo con el texto "¡Hola desde Lit!"', async () => {
    const el = await fixture(html`<divisa-componente></divisa-componente>`);
    const paragraph = el.shadowRoot.querySelector('p');
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toBe('¡Hola desde Lit!');
  });
});
