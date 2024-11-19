import "../src/abm-glass-filter.js";

export default {
  title: "Páginas/AbmGlassFilter",
  component: "abm-glass-filter",
};

const Template = (args) => {
  const el = document.createElement("abm-glass-filter");
  Object.assign(el, args);
  return el;
};

export const Default = Template.bind({});
Default.args = {
  searchValue: "",
};
