const { execSync } = require('child_process');
const path = require('path');

module.exports = function (plop) {
  // Generador para crear una page-es
  plop.setGenerator('page-es', {
    description: 'Crea una nueva página en src/page-es',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '¿Cuál es el nombre de la página? (Debe contener un guion)',
        validate: function(value) {
          // Validación para asegurarse de que el nombre contenga al menos un guion
          if (/[^a-z0-9-]/i.test(value)) {
            return 'El nombre solo puede contener letras, números y guiones.';
          }
          if (!value.includes('-')) {
            return 'El nombre debe contener al menos un guion.';
          }
          return true;
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/page-es/{{name}}/node_modules/.gitkeep',
        template: ''
      },
      {
        type: 'add',
        path: 'src/page-es/{{name}}/src/{{kebabCase name}}.scss',
        template: `/* Estilos de la página {{name}} */`
      },
      {
        type: 'add',
        path: 'src/page-es/{{name}}/src/{{kebabCase name}}.js',
        template: `
import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './{{kebabCase name}}.scss';

class {{pascalCase name}} extends LitElement {
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
    return html\`<p>¡Hola desde Lit!</p>\`;
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

customElements.define('{{kebabCase name}}', {{pascalCase name}});
`
      },
      {
        type: 'add',
        path: 'src/page-es/{{name}}/stories/{{kebabCase name}}.stories.js',
        template: `
import '../src/{{kebabCase name}}.js';
    
export default {
  title: 'Páginas/{{pascalCase name}}',
  component: '{{pascalCase name}}',
};
    
const Template = (args) => {
  const el = document.createElement('{{kebabCase name}}');
  return el;
};
    
export const Default = Template.bind({});
Default.args = {};
`
      },
      {
        type: 'add',
        path: 'src/page-es/{{name}}/test/{{kebabCase name}}.test.js',
        template: `
import { expect, it, describe } from 'vitest';
import { html, fixture } from '@open-wc/testing-helpers';
import '../src/{{kebabCase name}}.js';
    
describe('{{pascalCase name}}', () => {
  it('debería renderizar un párrafo con el texto "¡Hola desde Lit!"', async () => {
    const el = await fixture(html\`<{{kebabCase name}}></{{kebabCase name}}>\`);
    const paragraph = el.shadowRoot.querySelector('p');
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent).toBe('¡Hola desde Lit!');
  });
});
`
      },
      {
        type: 'add',
        path: 'src/page-es/{{name}}/package.json',
        template: `{
  "name": "page-{{kebabCase name}}",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest run"
  },
  "dependencies": {
    "lit": "^2.0.0"
  },
  "devDependencies": {
    "vite": "^4.0.0",
    "@open-wc/testing": "^2.0.0",
    "vitest": "^0.33.0"
  }
}`
      },
      // Acción personalizada para ejecutar 'pnpm install' después de la creación de los archivos
      function (answers) {
        const targetDir = path.resolve(__dirname, `src/page-es/${answers.name}`);
        console.log(`Ejecutando 'pnpm install' en ${targetDir}...`);

        try {
          // Cambiar al directorio recién creado y ejecutar 'pnpm install'
          execSync('pnpm install', { stdio: 'inherit', cwd: targetDir });
          console.log('Dependencias instaladas con éxito.');

          // Ahora ejecutamos 'pnpm add -D sass' en ese directorio
          console.log(`Ejecutando 'pnpm add -D sass' en ${targetDir}...`);
          execSync('pnpm add -D sass', { stdio: 'inherit', cwd: targetDir });
          console.log('Sass instalado con éxito.');

        } catch (error) {
          console.error(`Error al instalar dependencias en ${targetDir}:`, error.message);
          throw new Error(`Error al instalar dependencias: ${error.message}`);
        }
      }
    ]
  });
};
