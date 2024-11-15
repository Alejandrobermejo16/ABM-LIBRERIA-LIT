import { html, css, LitElement, unsafeCSS } from "lit";
import styles from "./styles.scss?inline";

class AbmGlassFilter extends LitElement {
  static get is() {
    return "abm-glass-filter";
  }

  static get properties() {
    return {
      /**
       * value of the input search
       * @default ''
       * @type {String}
       */
      searchValue: {
        type: String,
        attribute: "search-value",
      },
    };
  }

  static get styles() {
    return [unsafeCSS(styles)];
  }

  constructor() {
    super();
    this.searchValue = "";
  }

  render() {
    return html`
      <div class="input-container">
        <input
          data-id="inputFound"
          @input="${this._foundValue}"
          placeholder="Buscar..."
          .value="${this.searchValue}"
        />
        <span class="icon">🔍</span>
      </div>
    `;
  }

  _foundValue(event) {
    /**
     * This event reports the value of the input to the parent
     * @event glass-filter-value-change
     */
    this.searchValue = event.target.value;

    this.dispatchEvent(
      new CustomEvent("glass-filter-value-change", {
        bubbles: true,
        composed: true,
        detail: this.searchValue,
      })
    );
  }
}

customElements.define("abm-glass-filter", AbmGlassFilter);
