import React from "react";
import styled from "styled-components";
import { FaGoogle, FaApple, FaQrcode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const Cabeçalho = styled.div`
  width: 100%;
  background-color: #ffb400;
  padding: 30px;
  text-align: center;

  h1 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
  }
`;

const Formulario = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
`;

const Titulo = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CampoEntrada = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Botão = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ffb400;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Divisor = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  span {
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }

  p {
    margin: 0 10px;
    font-size: 0.9rem;
    color: #666;
  }
`;

const BotãoOpção = styled(Botão)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #000;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Rodapé = styled.p`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  line-height: 1.5;
  margin-top: 20px;
`;

const Login = () => {
  const navegar = useNavigate();

  const voltarParaInicio = () => {
    navegar("/"); 
  };

  return (
    <Container>
      <Cabeçalho>
        <h1>MaricáFOOD</h1>
      </Cabeçalho>
      <Formulario>
        <Titulo>Acessar com número de telefone</Titulo>
        <CampoEntrada type="text" placeholder="Digite seu telefone" />
        <Botão onClick={voltarParaInicio}>Continuar</Botão>
        <Divisor>
          <span></span>
          <p>ou</p>
          <span></span>
        </Divisor>
        <BotãoOpção>
          <FaGoogle /> Continuar com o Google
        </BotãoOpção>
        <BotãoOpção>
          <FaApple /> Continuar com a Apple
        </BotãoOpção>
        <Divisor>
          <span></span>
          <p>ou</p>
          <span></span>
        </Divisor>
        <BotãoOpção>
          <FaQrcode /> Fazer login com o código QR
        </BotãoOpção>
        <Rodapé>
          Ao continuar, você concorda em receber chamadas e mensagens SMS/RCS
          ou pelo WhatsApp, inclusive automáticas, no número informado.
        </Rodapé>
      </Formulario>
    </Container>
  );
};

export default Login;
