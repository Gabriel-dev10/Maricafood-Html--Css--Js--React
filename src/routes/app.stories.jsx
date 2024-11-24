import React from "react";
import App from "./app";

export default {
  title: "Componentes/app",
  component: App,
};

const Template = (args) => <App {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {};
