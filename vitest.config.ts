import { defineConfig } from 'vitest/config';
import path from 'path';


export default defineConfig({
  test: {
    environment: 'jsdom', // Configurar para pruebas en un entorno de navegador
    globals: true, // Esto hace que los métodos de test como 'describe', 'it', 'expect' estén disponibles globalmente
    include: [
        path.resolve(__dirname, 'src/page-es/*/test/**/*.{test,spec}.js'),       
        '**/*.{test,spec}.ts', 
        '**/*.{test,spec}.js', 
        '**/*.{test,spec}.tsx', 
        '**/*.{test,spec}.jsx',
        'src/page-es/*/test/**/*.{test,spec}.js'
      ], 
  },
});
