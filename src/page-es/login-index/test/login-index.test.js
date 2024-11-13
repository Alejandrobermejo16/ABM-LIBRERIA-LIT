
    import { html, fixture, expect } from '@open-wc/testing';
    import '../src/login-index.js';
    
    describe('LoginIndex', () => {
      it('debería renderizar correctamente', async () => {
        const el = await fixture(html`<login-index></login-index>`);
        expect(el).toBeTruthy();
      });
    });
    