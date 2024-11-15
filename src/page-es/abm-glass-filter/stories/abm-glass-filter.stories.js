
import '../src/abm-glass-filter.js';
    
export default {
  title: 'Páginas/AbmGlassFilter',
  component: 'AbmGlassFilter',
};
    
const Template = (args) => {
  const el = document.createElement('abm-glass-filter');
  return el;
};
    
export const Default = Template.bind({});
Default.args = {
  'search-value': ''
};
