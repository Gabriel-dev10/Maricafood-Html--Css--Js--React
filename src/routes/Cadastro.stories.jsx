import React from "react";
import Cadastro from "./cadastro";

export default {
  title: "Componentes/Cadastro",
  component: Cadastro,
};

const Template = (args) => <Cadastro {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {};
