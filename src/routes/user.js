import React from 'react';
import styled from 'styled-components';
import { FaBell, FaCreditCard, FaComments, FaHeart, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #ffb400;
  height: 100vh;
`;

const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InformacaoPerfil = styled.div`
  display: flex;
  align-items: center;
`;

const ImagemPerfil = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e57373;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`;

const NomePerfil = styled.div`
  margin-left: 15px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Menu = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const IconeMenu = styled.div`
  font-size: 1.5rem;
  color: #555;
`;

const TextoMenu = styled.div`
  flex-grow: 1;
  margin-left: 15px;

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: #999;
  }
`;

const IndicadorMenu = styled.div`
  background-color: #e57373;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 3px 7px;
  border-radius: 12px;
`;

const Usuario = () => {
  const navegar = useNavigate();

  const voltarParaInicio = () => {
    navegar('/');
  };

  return (
    <Container>
      <Cabecalho>
        <InformacaoPerfil>
          <ImagemPerfil onClick={voltarParaInicio}>🎉</ImagemPerfil>
          <NomePerfil>Usuário 1</NomePerfil>
        </InformacaoPerfil>
      </Cabecalho>

      <Menu>
        <ItemMenu>
          <IconeMenu><FaComments /></IconeMenu>
          <TextoMenu>
            <h4>Conversas</h4>
            <p>Meu histórico de conversas</p>
          </TextoMenu>
          <IndicadorMenu>2</IndicadorMenu>
        </ItemMenu>
        <ItemMenu>
          <IconeMenu><FaBell /></IconeMenu>
          <TextoMenu>
            <h4>Notificações</h4>
            <p>Minha central de notificações</p>
          </TextoMenu>
          <IndicadorMenu>4</IndicadorMenu>
        </ItemMenu>
        <ItemMenu>
          <IconeMenu><FaCreditCard /></IconeMenu>
          <TextoMenu>
            <h4>Pagamentos</h4>
            <p>Meus saldos e cartões</p>
          </TextoMenu>
        </ItemMenu>
        <ItemMenu>
          <IconeMenu><FaUsers /></IconeMenu>
          <TextoMenu>
            <h4>Storys</h4>
            <p>Cresça</p>
          </TextoMenu>
          <IndicadorMenu>NOVO!</IndicadorMenu>
        </ItemMenu>
        <ItemMenu>
          <IconeMenu><FaHeart /></IconeMenu>
          <TextoMenu>
            <h4>Favoritos</h4>
            <p>Meus locais favoritos</p>
          </TextoMenu>
        </ItemMenu>
      </Menu>
    </Container>
  );
};

export default Usuario;
