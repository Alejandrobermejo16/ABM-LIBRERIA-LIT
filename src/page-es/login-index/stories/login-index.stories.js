
    import '../src/login-index.js';
    
    export default {
      title: 'Páginas/LoginIndex',
      component: 'LoginIndex',
    };
    
    const Template = (args) => {
      const el = document.createElement('login-index');
      return el;
    };
    
    export const Default = Template.bind({});
    Default.args = {};
    