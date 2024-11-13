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
        // Crear la estructura de carpetas y archivos para la página
        {
          type: 'add',
          path: 'src/page-es/{{name}}/coverage/.gitkeep', // Archivo vacío para coverage
          template: ''
        },
        {
          type: 'add',
          path: 'src/page-es/{{name}}/node_modules/.gitkeep', // Archivo vacío para node_modules
          template: ''
        },
        {
          type: 'add',
          path: 'src/page-es/{{name}}/src/{{kebabCase name}}.scss', // Plantilla SCSS con kebabCase
          template: `/* Estilos de la página {{name}} */`
        },
        {
          type: 'add',
          path: 'src/page-es/{{name}}/src/{{kebabCase name}}.js', // Plantilla JS con kebabCase
          template: `
    import { LitElement, html, css } from 'lit';
    
    class {{pascalCase name}} extends LitElement {
      static styles = css\`
        /* Agrega tus estilos aquí */
      \`;
    
      render() {
        return html\`
          <div>
            <h1>¡Hola, soy la página {{name}}!</h1>
          </div>
        \`;
      }
    }
    
    customElements.define('{{kebabCase name}}', {{pascalCase name}});
    `
        },
        {
          type: 'add',
          path: 'src/page-es/{{name}}/stories/{{kebabCase name}}.stories.js', // Historia para Storybook con kebabCase
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
          path: 'src/page-es/{{name}}/test/{{kebabCase name}}.test.js', // Test de la página con kebabCase
          template: `
    import { html, fixture, expect } from '@open-wc/testing';
    import '../src/{{kebabCase name}}.js';
    
    describe('{{pascalCase name}}', () => {
      it('debería renderizar correctamente', async () => {
        const el = await fixture(html\`<{{kebabCase name}}></{{kebabCase name}}>\`);
        expect(el).toBeTruthy();
      });
    });
    `
        },
        {
          type: 'add',
          path: 'src/page-es/{{name}}/package.json', // package.json
          template: `{
      "name": "page-{{kebabCase name}}",
      "version": "1.0.0",
      "scripts": {
        "dev": "vite",
        "build": "vite build"
      },
      "dependencies": {
        "lit": "^2.0.0"
      },
      "devDependencies": {
        "vite": "^4.0.0",
        "@open-wc/testing": "^2.0.0"
      }
    }`
        },
        {
          type: 'add',
          path: 'src/page-es/{{name}}/vite.config.js', // vite.config.js
          template: `import { defineConfig } from 'vite';
    
    export default defineConfig({
      root: './src/page-es/{{kebabCase name}}',
      build: {
        outDir: '../../dist',
      },
    });
    `
        }
      ]
    });
  
    // Puedes agregar más generadores aquí si es necesario, como para 'combination' o 'composition'
  };
  