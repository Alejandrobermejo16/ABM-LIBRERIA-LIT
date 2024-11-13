
    import { LitElement, html, css } from 'lit';
    
    class LoginIndex extends LitElement {
      static styles = css`
        /* Agrega tus estilos aquí */
      `;
    
      render() {
        return html`
          <div>
            <h1>¡Hola, soy la página login-index!</h1>
          </div>
        `;
      }
    }
    
    customElements.define('login-index', LoginIndex);
    