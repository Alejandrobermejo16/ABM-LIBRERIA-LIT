
import { expect, it, describe } from 'vitest';
import { html, fixture } from '@open-wc/testing-helpers';
import '../src/diver-gente.js';
    
describe('DiverGente', () => {
  it('debería renderizar un párrafo con el texto "¡Hola desde Lit!"', async () => {
    const el = await fixture(html`<diver-gente></diver-gente>`);
    const paragraph = el.shadowRoot.querySelector('p');
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toBe('¡Hola desde Lit!');
  });
});
