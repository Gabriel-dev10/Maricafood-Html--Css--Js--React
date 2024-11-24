import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #000;
`;

const Cabeçalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  a {
    color: red;
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Secao = styled.section`
  margin-bottom: 20px;
`;

const InformacoesRestaurante = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1rem;
    font-weight: normal;
  }

  a {
    color: red;
    font-size: 0.9rem;
    text-decoration: none;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
`;

const DetalhesItem = styled.div`
  flex: 1;

  h3 {
    font-size: 1rem;
    margin: 0 0 5px;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    color: #666;
  }

  strong {
    display: block;
    margin-top: 10px;
    font-size: 1rem;
  }
`;

const ControleQuantidade = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    padding: 5px;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  span {
    margin: 0 10px;
    font-size: 1rem;
  }
`;

const Resumo = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    span {
      font-size: 0.9rem;
    }

    strong {
      font-size: 0.9rem;
    }
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  strong {
    color: green;
    font-size: 1.2rem;
  }
`;

const BotaoContinuar = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background-color: #ffb400;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;


const FinalizarPedido = () => (
  <ContainerFinalizarPedido>
    <TituloFinalizarPedido>Carrinho</TituloFinalizarPedido>

    <SecaoEndereco>
      <h3>Endereço</h3>
      <BoxEndereco>
        <TextoEndereco>Seu Endereço</TextoEndereco>
        <span>Maricá - RJ</span>
        <BotaoFazerPedido>Escolher Outro</BotaoFazerPedido>
      </BoxEndereco>
    </SecaoEndereco>

    <SecaoPagamento>
      <OpcaoPagamento>
        <IconePagamento />
        <span>PIX</span>
      </OpcaoPagamento>
      <OpcaoPagamento>
        <IconePagamento />
        <span>Crédito e Débito</span>
      </OpcaoPagamento>
      <OpcaoPagamento>
        <IconePagamento />
        <span>Moeda Social Mumbuca</span>
      </OpcaoPagamento>
    </SecaoPagamento>
  </ContainerFinalizarPedido>
);



export const ContainerFinalizarPedido = styled.div`
  padding: 20px 4%;
  background-color: #fff;
`;

export const BotaoFazerPedido = styled.button`
  margin-top: 2px;
  padding: 10px 20px;
  background-color: #ffb400;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #ff6347;
  }
`;

export const TituloFinalizarPedido = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const SecaoEndereco = styled.div`
  margin-bottom: 20px;
`;

export const BoxEndereco = styled.div`
  background-color: #f9f9f9;
  padding: 2px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextoEndereco = styled.p`
  font-size: 16px;
  color: #777;
`;

export const SecaoPagamento = styled.div`
  display: flex;
  gap: 15px;
`;

export const OpcaoPagamento = styled.div`
  flex: 1;
  text-align: center;
  padding: 2px;
  background-color: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ffcccb;
  }
`;

export const IconePagamento = styled.div`
  font-size: 24px;
  color: #ff4500;
  margin-bottom: 5px;
`;




const Carrinho = () => {
  const navegar = useNavigate();

  const Inicio = () => {
    navegar("/pedido");
  };

  return (
    <Container>
      <FinalizarPedido />
      <Cabeçalho>
        <h1>Opção</h1>
        <a>Limpar</a>
      </Cabeçalho>
      <Secao>
        <InformacoesRestaurante>
          <h2>Hambúrguer Padrão</h2>
          <a>Adicionar mais itens</a>
        </InformacoesRestaurante>
        <Item>
          <DetalhesItem>
            <h3>Hambúrguer Padrão</h3>
            <p>Dois hambúrgueres (100% carne bovina)</p>
            <strong>R$ 25,90</strong>
          </DetalhesItem>
          <ControleQuantidade>
            <button>
              <FaTrashAlt />
            </button>
            <span>1</span>
            <button>
              <FaPlus />
            </button>
          </ControleQuantidade>
        </Item>
        <a style={{ color: "red", fontSize: "0.9rem" }}>
          Adicionar mais itens
        </a>
      </Secao>
      <Secao>
        <Resumo>
          <h3>Resumo de valores</h3>
          <div>
            <span>Subtotal</span>
            <strong>R$ 25,90</strong>
          </div>
          <div>
            <span>Taxa de entrega</span>
            <strong>R$ 1,99</strong>
          </div>
          <div>
            <span>Desconto Clube</span>
            <strong style={{ color: "green" }}>- R$ 0,00</strong>
          </div>
          <Total>
            <h2>Total</h2>
            <strong>R$ 27,89</strong>
          </Total>
        </Resumo>
      </Secao>
      <BotaoContinuar onClick={Inicio}>Finalizar Pagamento</BotaoContinuar>
    </Container>
  );
};

export default Carrinho;
