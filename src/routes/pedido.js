import React from 'react';
import styled from 'styled-components';

import { FaShoppingCart, FaRegHeart, FaUserAlt } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { useNavigate} from 'react-router-dom';


import imgRestaurante1 from '../assets/restaurantes/16.png';
import imgRestaurante2 from '../assets/restaurantes/17.png';
import imgRestaurante3 from '../assets/restaurantes/18.png';
import imgRestaurante4 from '../assets/restaurantes/19.png';
import imgComida1 from '../assets/comidas/6.png';
import imgComida2 from '../assets/comidas/7.png';
import imgComida3 from '../assets/comidas/8.png';
import imgComida4 from '../assets/comidas/9.png';
import imgPromocao1 from '../assets/comidas/12.png';
import imgCarrossel1 from '../assets/carrossel/img1.png';
import imgCarrossel2 from '../assets/carrossel/img2.png';
import imgCarrossel3 from '../assets/carrossel/img3.png';



export const ContainerPagina = styled.div`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const TituloSecao = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin: 20px 4%;
    text-align: left;
    color: #9f000c;
`;


export const ContainerNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #ffb400;
    color: white;
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
  color: black;
  font-size: 1.6rem;
`;

export const LinksNavegacao = styled.div`
    display: flex;
    gap: 2vw;
      @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      }
`;

export const LinkNavegacao = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ContainerPesquisa = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;


const IconePesquisa = styled(IoSearch)`
  position: absolute;
  right: 1rem;
  font-size: 1.5rem;
  color: #aaa;
`;

export const CampoPesquisa = styled.input`
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  @media (max-width: 768px) {
  width: 100%;
  }
`;


export const ContainerBotoes = styled.div`
    display: flex;
    gap: 10px;
`;


export const ContainerSecao = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 20px 4%;
`;

export const ContainerCartao = styled.div`
    flex: 1 1 calc(20% - 20px);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
`;

export const IconeCurtir = styled.div`
    font-size: 20px;
    color: #ff4500;
    align-self: flex-end;
    cursor: pointer;
`;

export const ImagemProduto = styled.img`
    width: 250px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const TituloProduto = styled.h3`
    font-size: 18px;
    color: #333;
    margin: 10px 0;
`;

export const DetalhesProduto = styled.p`
    font-size: 14px;
    color: #777;
    margin: 5px 0;
`;

export const ContainerPreco = styled.div`
    margin-top: 10px;
`;

export const Preco = styled.p`
    font-size: 18px;
    color: #333;
    font-weight: bold;
`;

export const BotaoCarrinho = styled.button`
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #ffb400;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
        background-color: #ff6347;
    }
`;

const BotaoIcone = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: white;

    &:hover {
        color: #ff6347; 
    }
`;


const ContainerCarrossel = styled.div`
  position: relative;
  width: 100%;
  height: 100%; 
  overflow: hidden;
  border-radius: 20px;
`;

const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%; 
`;

const Slide = styled.img`
  width: 800px;
  height: 400px;
  border-radius: 20px; 
`;

const BotaoControle = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  ${(props) => (props.direcao === "anterior" ? "left: 10px;" : "right: 10px;")}
`;


const CartaoProduto = ({ titulo, preco, distancia, tempoEntrega, imagem }) => (
    <ContainerCartao>
        <IconeCurtir>♡</IconeCurtir>
        <ImagemProduto src={imagem} alt={titulo} />
        <TituloProduto>{titulo}</TituloProduto>
        <DetalhesProduto>{distancia} • {tempoEntrega}</DetalhesProduto>
        <ContainerPreco>
            <Preco>R$ {preco}</Preco>
            <BotaoCarrinho>Adicionar ao carrinho</BotaoCarrinho>
        </ContainerPreco>
    </ContainerCartao>
);

const Carrossel = () => {
    let slideIndex = 0;

    const moveSlide = (direction) => {
        const slides = document.querySelector(".slides");
        const totalSlides = slides.children.length;

        slideIndex += direction;

        if (slideIndex < 0) {
            slideIndex = totalSlides - 1; 
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0; 
        }

        slides.style.transform = `translateX(-${slideIndex * 20}%)`;
    };

    return (
        <ContainerCarrossel>
            <Slides className="slides">
                <Slide src={imgCarrossel1} alt="Imagem 1" />
                <Slide src={imgCarrossel2} alt="Imagem 2" />
                <Slide src={imgCarrossel3} alt="Imagem 3" />
                <Slide src={imgCarrossel1} alt="Imagem 1" />
                <Slide src={imgCarrossel2} alt="Imagem 2" />
                <Slide src={imgCarrossel3} alt="Imagem 3" />
                <Slide src={imgCarrossel1} alt="Imagem 1" />
                <Slide src={imgCarrossel2} alt="Imagem 2" />
                <Slide src={imgCarrossel3} alt="Imagem 3" />
            </Slides>
            <BotaoControle direcao="anterior" onClick={() => moveSlide(-1)}>
                ❮
            </BotaoControle>
            <BotaoControle direcao="proximo" onClick={() => moveSlide(1)}>
                ❯
            </BotaoControle>
        </ContainerCarrossel>
    );
}

const Pedido = () => {
    const navigate = useNavigate();

    
    const use = () => {
      navigate('/user'); 
    };

    const navegarParaCarrinho = () => {
        navigate('/carrinho');
    };

    const Inicio = () => {
        navigate('/'); 
    };

    return (
        <ContainerPagina>
            <ContainerNavbar>
                <Logo>
                    <TextoLogo>Maricá</TextoLogo>
                    <TextoFood>FOOD</TextoFood>
                </Logo>
                <LinksNavegacao>
                    <LinkNavegacao onClick={Inicio}>Início</LinkNavegacao>
                    <LinkNavegacao  href="#populares">Populares</LinkNavegacao>
                    <LinkNavegacao  href="#promocao">Promoção</LinkNavegacao>
                    <LinkNavegacao  href="#restaurantes">Restaurantes</LinkNavegacao>
                </LinksNavegacao>
                <ContainerPesquisa>
                    <CampoPesquisa type="text" placeholder="Buscar..." />
                    <IconePesquisa>
                        <IoSearch /> 
                    </IconePesquisa>
                </ContainerPesquisa>
                <ContainerBotoes>
                    <BotaoIcone onClick={navegarParaCarrinho}>
                        <FaShoppingCart size={24} color="#fff" />
                    </BotaoIcone>
                    <BotaoIcone>
                        <FaRegHeart size={24} color="#fff" />
                    </BotaoIcone>
                    <BotaoIcone onClick={use}>
                        <FaUserAlt size={24} color="#fff" />
                    </BotaoIcone>
                </ContainerBotoes>
            </ContainerNavbar>
            <Carrossel />
            <TituloSecao id='populares'>Populares</TituloSecao>
            <ContainerSecao>
                <CartaoProduto titulo="Hambúrguer Padrão" preco="19,90" distancia="1.2 km" tempoEntrega="15 min" imagem={imgComida1} />
                <CartaoProduto titulo="Pizza" preco="39,90" distancia="2.5 km" tempoEntrega="25 min" imagem={imgComida2} />
                <CartaoProduto titulo="Sanduiche" preco="29,90" distancia="1.8 km" tempoEntrega="20 min" imagem={imgComida3} />
                <CartaoProduto titulo="Batata frita " preco="4,90" distancia="3.2 km" tempoEntrega="10 min" imagem={imgComida4} />
            </ContainerSecao>

            <TituloSecao id='promocao'>Promoções</TituloSecao>
            <ContainerSecao>
                <CartaoProduto titulo="Pizza Família" preco="59,90" distancia="2.0 km" tempoEntrega="30 min" imagem={imgPromocao1} />
            </ContainerSecao>

            <TituloSecao id='restaurantes'>Restaurantes</TituloSecao>
            <ContainerSecao>
                <CartaoProduto titulo="Tal burguer" preco="Variado" distancia="1.2 km" tempoEntrega="20 min" imagem={imgRestaurante1} />
                <CartaoProduto titulo="La pasta" preco="Variado" distancia="2.0 km" tempoEntrega="30 min" imagem={imgRestaurante2} />
                <CartaoProduto titulo="Naturals" preco="Variado" distancia="3.0 km" tempoEntrega="25 min" imagem={imgRestaurante3} />
                <CartaoProduto titulo="Chef kiss" preco="Variado" distancia="1.5 km" tempoEntrega="15 min" imagem={imgRestaurante4} />
            </ContainerSecao>
        </ContainerPagina>
    );
};

export default Pedido;
