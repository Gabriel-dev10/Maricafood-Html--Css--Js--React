import React from "react";
import Carrinho from "./carrinho";

export default {
  title: "Componentes/carrinho",
  component: Carrinho,
};

const Template = (args) => <Carrinho {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {};
