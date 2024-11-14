
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './divisa-componente.scss';

class DivisaComponente extends LitElement {
  static get is() {
    return 'base-component';
  }

  static get properties() {
    return {
      publicProp: { type: String },
    };
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }

  constructor() {
    super();
    this.publicProp = 'Valor inicial';
    this._privateProp = 'Valor privado';
  }

  render() {
    return html`<div>Hola Mundo</div>`;
  }

  _exampleMethod() {
    this._dispatchCustomEvent();
  }

  _dispatchCustomEvent() {
    this.dispatchEvent(new CustomEvent('base-component-event', {
      detail: { message: 'Evento lanzado' },
      bubbles: true,
      composed: true,
    }));
  }
}

customElements.define('divisa-componente', DivisaComponente);
