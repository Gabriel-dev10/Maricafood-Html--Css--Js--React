import React from 'react';
import styled from 'styled-components';


import { IoSearch } from 'react-icons/io5';
import { CiLocationOn} from 'react-icons/ci';
import { FaMoneyBills, FaMoneyBillTrendUp } from "react-icons/fa6";


import { useNavigate } from 'react-router-dom';


import LogoImage from '../assets/1.png';
import mark from '../assets/mark.png';
import moto from '../assets/moto.png';
import cesta from '../assets/cesta.png';



const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 4vw;  
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 3;
  @media (max-width: 768px) {
  flex-direction: column;
  gap: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.8rem;
  @media (max-width: 768px) {
  font-size: 1.5rem;
  }
`;

const TextoLogo = styled.span`
  font-weight: 700;
`;

const TextoFood = styled.span`
  color: #ffb400;
  font-size: 1.6rem;
`;

const LinksNavegacao = styled.div`
  display: flex;
  gap: 2vw;
  @media (max-width: 768px) {
  flex-direction: column;
  gap: 1rem;
  }
`;

const LinkNavegacao = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
`;

const ContainerCaixaPesquisa = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CaixaPesquisa = styled.input`
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  @media (max-width: 768px) {
  width: 100%;
  }
`;

const IconePesquisa = styled(IoSearch)`
  position: absolute;
  right: 1rem;
  font-size: 1.5rem;
  color: #aaa;
`;

const ContainerBotoes = styled.div`
  display: flex;
  gap: 1rem;
`;

const Botao = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
`;

const BotaoCriarConta = styled(Botao)`
  background-color: white;
  color: black;
  border: 2px solid black;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const BotaoEntrar = styled(Botao)`
  background-color: black;
  color: white;
  &:hover {
    background-color: #333;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1500px;
  margin-top: 2rem;
  gap: 2rem;
  padding: 1rem;
  @media (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 0.5rem;
  }
`;

const SecaoTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: black;
`;

const TextoBoasVindas = styled.p`
  font-size: 3.5rem;
  margin: 0;
  @media (max-width: 768px) {
  font-size: 2rem;
  }
`;

const TextoMaricaFood = styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: black;
    @media (max-width: 768px) {
    font-size: 3rem;
  } 
`;

const TextoDestaque = styled.span`
  color: #ffb400;
`;

const TextoSub = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const BotoesAcoes = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const BotaoAcao = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: white;
  background-color:#ffb400;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

// const FundoAmarelo = styled.div`
//   position: relative;
//   top: 2rem;
//   max-height:500px;
//   max-width:800px;
//   right: 0;
//   width: 50vw;
//   height: 65vh;
//   background-color: #ffb400;
//   border-top-left-radius: 30rem;
//   border-bottom-left-radius: 30rem;
//   z-index: 1;
//     @media (max-width: 768px) {
//     display: none;
//   }
// `;

const ContainerImagem = styled.div`
 overflow-x: hidden; 
 @media (max-width: 768px) {
    display: none;
  }
`;

const SecaoMeio = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1500px;
  padding: 2rem 0;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Titulo = styled.h1`
  margin-top: 6rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Box = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  padding: 1.5rem;
  margin-top: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Icone = styled.div`
  font-size: 2rem;
  color: #ffb400;
  margin-bottom: 1rem;
`;

const TituloBox = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
`;

const TextoBox = styled.p`
  font-size: 1rem;
  color: #666;
`;

const SecaoMeioCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 1500px;
  width: 100%;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }

    @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Titulocard = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Textocard = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
`;

const ImagemCard = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
`;

const BotaoCadastrar = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: white;
  background-color: #ffb400;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background-color: #e0a800;
  }
`;



const SecaoParceiro = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;  
  height: 40rem;
  width: 90rem;
  padding: 10rem;
  background:#9f000c;
    @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TextoParceiro = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
    @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PParceiro = styled.p`
  font-size: 20px;
  color: #333;
  text-align: center; 
  max-width: 600px;
  padding: 3rem;
  color: white;
`;

const PalavraMarica = styled.span`
  color: #ffb400;
`;

const PalavraFood = styled.span`
  color: #ffb400;
`;


const App = () => {
  const navigate = useNavigate();

  const use = () => {
    navigate('/pedido'); 
  };
  const Vaipralogin = () => {
    navigate('/Login'); 
  };
  const Vaipracad = () => {
    navigate('/Cadastro'); 
  };
  return (
    <MainContainer>

      <ContainerNavbar>
        <Logo>
          <TextoLogo>Maricá</TextoLogo>
          <TextoFood>FOOD</TextoFood>
        </Logo>
        <LinksNavegacao>
          <LinkNavegacao href="#sobre">Sobre</LinkNavegacao>
          <LinkNavegacao href="#servicos">Serviços</LinkNavegacao>
          <LinkNavegacao href="#vantagens">Vantagens</LinkNavegacao>
        </LinksNavegacao>
        <ContainerCaixaPesquisa>
          <CaixaPesquisa type="text" placeholder="Pesquisar..." />
          <IconePesquisa />
        </ContainerCaixaPesquisa>
        <ContainerBotoes>
          <BotaoCriarConta onClick={Vaipracad}>Criar Conta</BotaoCriarConta>
          <BotaoEntrar onClick={Vaipralogin}>Entrar</BotaoEntrar>
        </ContainerBotoes >
      </ContainerNavbar >


      <ContentContainer>
        <SecaoTexto>
          <TextoBoasVindas>Bem-vindo ao</TextoBoasVindas>
          <TextoMaricaFood>
            Maricá<TextoDestaque>FOOD</TextoDestaque>
          </TextoMaricaFood>
          <TextoSub>Uma nova experiência e inovação na área de delivery</TextoSub>
          <TextoSub>Visando somente sua cidade!</TextoSub>
          <BotoesAcoes>
            <BotaoAcao onClick={use}>Pedir Agora</BotaoAcao>
            <BotaoAcao>Saiba Mais</BotaoAcao>
          </BotoesAcoes>
        </SecaoTexto>
        {/* <FundoAmarelo /> */}
        <ContainerImagem>
            <img
            src={LogoImage}
            alt="Logo"
            style={{
              width: '700px', 
              maxWidth: '800px', 
            }}
          />
        </ContainerImagem>
      </ContentContainer>

      <Titulo id='servicos'>Por que escolher o MaricáFOOD?</Titulo>

      <SecaoMeio>
        <Box>
          <Icone>
            <CiLocationOn />
          </Icone>
          <TituloBox>Foco em Maricá</TituloBox>
          <TextoBox>
            Foco local na cidade de Maricá, facilitando a solicitação de
            refeições com rastreamento, pagamento local e redução do tempo de
            espera.
          </TextoBox>
        </Box>
        <Box>
          <Icone>
            <FaMoneyBillTrendUp />
          </Icone>
          <TituloBox>Economia local</TituloBox>
          <TextoBox>
            Contribuição para o crescimento da economia local da cidade, através
            da geração de novos empregos e aumento das vendas locais.
          </TextoBox>
        </Box>
        <Box>
          <Icone>
            <FaMoneyBills />
          </Icone>
          <TituloBox>Formas de pagamento</TituloBox>
          <TextoBox>
            Oferece várias formas de pagamento, incluindo dinheiro, cartão de
            crédito e débito, moeda social mumbuca e pix.
          </TextoBox>
        </Box>
      </SecaoMeio>


      <Titulo>Seja nosso parceiro</Titulo>


      <SecaoMeioCard >
        <Card>
          <CardContent>
            <TextContainer>
              <Titulocard>Restaurante</Titulocard>
              <Textocard>
                Cadastre seu restaurante, seja nosso parceiro e venda muito mais
                com o nosso app.
              </Textocard>
            </TextContainer>
            <ImagemCard src={mark} />
          </CardContent>
          <BotaoCadastrar>Cadastrar</BotaoCadastrar>
        </Card>
        <Card>  
          <CardContent>
            <TextContainer>
              <Titulocard>Mercado</Titulocard>
              <Textocard>
                Mercearias, hortifrutis, farmácias, pet shops e muito mais. Venda
                no Maricá Food e veja seu negócio expandir.
              </Textocard>
            </TextContainer>
            <ImagemCard src={cesta} />
          </CardContent>
          <BotaoCadastrar>Cadastrar</BotaoCadastrar>
        </Card>
        <Card>
          <CardContent>
            <TextContainer>
              <Titulocard>Entregador</Titulocard>
              <Textocard>
                Está procurando uma forma de gerar mais renda? Cadastre-se e seja
                um entregador parceiro.
              </Textocard>
            </TextContainer>
            <ImagemCard src={moto} />
          </CardContent>
          <BotaoCadastrar>Cadastrar</BotaoCadastrar>
        </Card>
      </SecaoMeioCard>


      <SecaoParceiro id='vantagens'>
        <TextoParceiro>
          Vantagens de ser <PalavraMarica>parceiro</PalavraMarica> do Maricá
          <PalavraFood>FOOD</PalavraFood>
        </TextoParceiro>
        <PParceiro>
            A plataforma proporciona uma maneira simples e intuitiva de gerenciar pedidos e entregas, com integração em tempo real, facilitando o processo tanto para o restaurante quanto para o cliente. Além disso, o sistema de pagamento online seguro garante transações financeiras eficientes e sem riscos. Os estabelecimentos podem também oferecer descontos exclusivos, promoções ou cupons para atrair mais clientes, enquanto a plataforma oferece relatórios detalhados sobre vendas. 
        </PParceiro>
        <BotaoCadastrar>Cadastrar</BotaoCadastrar>
      </SecaoParceiro>
    </MainContainer>
  );
};

export default App;
