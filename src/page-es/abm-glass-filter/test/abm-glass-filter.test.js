import { expect, it, describe } from 'vitest';
import { html, fixture } from '@open-wc/testing-helpers';
import sinon from 'sinon';
import '../src/abm-glass-filter.js';

describe('AbmGlassFilter', async () => {
  const el = await fixture(html`<abm-glass-filter></abm-glass-filter>`);

   describe('Properties', () => {
    it('should update searchValue when input changes', async () => {
      const input = el.shadowRoot.querySelector('[data-id="inputFound"]');
      input.value = 'test input';
      input.dispatchEvent(new Event('input'));
    
      await el.updateComplete;
      expect(el.searchValue).toBe('test input');
    });
   });

  // describe('Métodos', () => {
  // });

  describe('Events', () => {
    it('the value of the input should change when the event is triggered', async () => {
      const input = el.shadowRoot.querySelector('[data-id="inputFound"]');
      input.value = 'write';
      const event = new CustomEvent('glass-filter-value-change');
      el.dispatchEvent(event);
      expect(input.value).toBe('write');
    });

    it('should dispatch glass-filter-value-change event with the correct detail', async () => {
      const input = el.shadowRoot.querySelector('[data-id="inputFound"]');
      const eventSpy = sinon.spy();
      el.addEventListener('glass-filter-value-change', eventSpy);
    
      input.value = 'new value';
      input.dispatchEvent(new Event('input'));
    
      expect(eventSpy.calledOnce).toBe(true);
      expect(eventSpy.firstCall.args[0].detail).toBe('new value');
    });
    
  });

  describe('Accesibility', () => {
    it('should have a placeholder in the input element', () => {
      const input = el.shadowRoot.querySelector('[data-id="inputFound"]');
      expect(input.placeholder).toBe('Buscar...');
    });
  
    it('should have an aria-label attribute in the input element', () => {
      const input = el.shadowRoot.querySelector('[data-id="inputFound"]');
      expect(input.getAttribute('aria-label')).toBe('Buscar');
    });
  });
  

});
