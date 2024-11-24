import React from "react";
import styled from "styled-components";
import { FaGoogle, FaApple} from "react-icons/fa";

import {useNavigate} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
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

const Form = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
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

const Divisao = styled.div`
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

const OptionButton = styled(Button)`
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


const Cadastro = () => {
  
  const navigate = useNavigate();

  const Inicio = () => {
    navigate('/'); 
  };

  return (
    <Container>
      <Header>
        <h1>MaricáFOOD</h1>
      </Header>
      <Form>
        <Title>Qual é o seu número de telefone?</Title>
        <Input type="text" placeholder="Informe seu número" />
        <Title>Defina uma senha</Title>
        <Input type="text" placeholder="Digite sua senha" />
        <Title>Confirme sua senha</Title>
        <Input type="text" placeholder="Repita sua senha" />
        <Button onClick={Inicio}>Continuar</Button>
        <Divisao>
          <span></span>
          <p>ou</p>
          <span></span>
        </Divisao>
        <OptionButton>
          <FaGoogle /> Continuar com o Google
        </OptionButton>
        <OptionButton>
          <FaApple /> Continuar com a Apple
        </OptionButton>
      </Form>
    </Container>
  );
};

export default Cadastro;
