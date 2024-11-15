
import '../src/nueva-prueba.js';
    
export default {
  title: 'Páginas/NuevaPrueba',
  component: 'NuevaPrueba',
};
    
const Template = (args) => {
  const el = document.createElement('nueva-prueba');
  return el;
};
    
export const Default = Template.bind({});
Default.args = {};
