
import '../src/divisa-componente.js';
    
export default {
  title: 'Páginas/DivisaComponente',
  component: 'DivisaComponente',
};
    
const Template = (args) => {
  const el = document.createElement('divisa-componente');
  return el;
};
    
export const Default = Template.bind({});
Default.args = {};
