import { expect, it, describe } from 'vitest';
import { html, fixture } from '@open-wc/testing-helpers';
import sinon from 'sinon';
import '../src/abm-glass-filter.js';

describe('AbmGlassFilter', async () => {
  const el = await fixture(html`<abm-glass-filter></abm-glass-filter>`);

  // describe('Properties', () => {
    
  // });

  // describe('Métodos', () => {
  // });

  describe('Eventos', () => {
    it('the value of the input should change when the event is triggered', async () => {
      const input = el.shadowRoot.querySelector('[data-id="inputFound"]');
      
      // Cambiar el valor del input
      input.value = 'write';

      // Disparar el evento
      const event = new CustomEvent('glass-filter-value-change');
      el.dispatchEvent(event);
      
      // Verificar el valor
      expect(input.value).toBe('write');
    });
  });

});
