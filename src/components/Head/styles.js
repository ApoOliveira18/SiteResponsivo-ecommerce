import styled, { css } from 'styled-components';
import { Menu, MagnifyingGlass, DownArrow } from '../../styles/Icons';

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  align-items: center;
  background-color: var(--menu-toggle);
`;

export const Header = styled.div`
  position: sticky;
  background: var(--back);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 75px;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  img {
    width: 166px;
    height: 62px;
    padding-top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p.pShippDesk {
      font-family: Times;
      font-size: 16px;
      font-style: italic;
      color: var(--texto-destaques);
      min-width: 120px;
      max-width: 100%;
      text-align: center;
      margin-right: 10px;
    }

    .pote {
      padding-top: 8px !important;
      width: 42px;
      height: 50px;
      padding-right: 10px;
    }

    span {
      font-size: 13px;
      color: var(--gray);
    }

    strong {
      font-size: 13px;
      color: var(--texto-destaques);
      margin-left: 3px;
      padding-right: 8px;
    }
  }

  /* Telas Pequenas  */
  @media (max-width: 425px) {
    width: min(425px, 100%);
    background: var(--back);

    input {
      display: none;
    }

    p.pShippDesk {
      display: none;
    }

    p.pShippMobile {
      display: none;
    }
  }

  @media (min-width: 426px) and (max-width: 724px) {
    p.pShippDesk {
      display: none;
    }

    input {
      display: block;
      border: solid 1px var(--gray);
      width: 20rem;
      height: 25px;

      padding: 4px 4px 4px 30px;
      border-radius: 3px;
    }
  }

  /* Ipad e Superiores */
  @media (min-width: 725px) {
    div.boxHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    p.pShippMobile {
      display: none;
    }

    input {
      border: solid 1px var(--gray);
      width: 20rem;
      height: 25px;

      padding: 4px 4px 4px 30px;
      border-radius: 3px;
    }

    button {
      background: var(--button-destaques);
      color: var(--back);
      border-radius: 3px;
      padding: 7px;
      font-family: Sans-serif;
      font-size: 11px;
      margin-left: 5px;
      width: 100%;
      max-width: 15rem;
      font-weight: bold;
    }
  }

  @media (min-width: 426px) {
    width: 100%;
  }
`;

export const MenuNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: calc(100vw);

  height: auto;
  padding: 0;

  div.topnav span {
    display: flex;
    justify-content: center;
    flex-direction: row;

    padding-top: 0px;
    font-size: 16px;
    color: var(--white);
  }

  div.topnav strong {
    padding-top: 13px;
    font-size: 16px;
    color: var(--white);
    font-weight: normal;
  }

  /* Adicione uma cor de fundo roxa à navegação superior */
  .topnav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    background-color: var(--menu-toggle);
    overflow: hidden;
    display: block;
  }

  /* Estilize os links dentro da barra de navegação */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 14px;
    text-decoration: none;
    font-style: italic;
    font-size: 1.7rem;
  }

  /* Adicione uma classe ativa para destacar a página atual */
  .active {
    background-color: var(--menu-active);
    color: white;
  }

  /* Ocultar o link que deve abrir e fechar o topnav em telas pequenas */
  .topnav .icon {
    display: none;
  }

  /* Dropdown container - necessário para posicionar o conteúdo suspenso */
  .dropdown {
    float: left;
    overflow: hidden;
  }

  /* Style the dropdown button to fit inside the topnav */
  .dropdown .dropbtn {
    font-size: 1.7rem;
    border: none;
    outline: none;
    color: white;
    padding: 14px 12px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    font-style: italic;
  }

  /* Defina o estilo do dropdown button para caber dentro do topnav */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* / * Estilize os links dentro do dropdown * / */
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Adicione um fundo escuro nos links do topnav e o botão suspenso ao passar o mouse */
  .topnav a:hover,
  .dropdown:hover .dropbtn {
    background-color: #6a5acd;
    color: white;
  }

  /* Adicionar um fundo cinza aos dropdowns links ao passar o mouse */
  .dropdown-content a:hover {
    background-color: var(--menu-dropdown);
    color: black;
  }

  /* Mostra o dropdown quando o usuário move o mouse sobre o botão suspenso */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Quando a tela tiver menos de 425 pixels de largura, oculte todos os links, exceto o primeiro ("Home"). Mostrar o link que contém deve abrir e fechar o topnav (.icon) */
  @media screen and (max-width: 425px) {
    .topnav {
      display: none;
    }
  }
`;

export const MenuMobile = styled.div`
  div.topnav span {
    display: flex;
    justify-content: center;
    flex-direction: row;

    padding-top: 30px;
    font-size: 16px;
    color: var(--white);
  }

  div.topnav strong {
    padding-top: 15px;
    font-size: 30px;
    color: var(--gray);
    font-weight: normal;
  }

  div.topnav strong.styleOr {
    padding-top: 15px;
    font-size: 30px;
    color: var(--white);
    font-weight: normal;
  }

  /***********************/
  input {
    display: block;
  }

  form {
    width: 100%;
    height: auto;
    background: var(--back);
    padding-left: 100px;
    position: absolute;
    top: -100px;
  }

  input {
    display: block;
    border: solid 1px var(--search);
    width: 85%;
    height: 35px;
    background: var(--back);
    margin-bottom: 20px;
    padding: 6px 6px 6px 30px;
    border-radius: 3px;
  }
  /***********************/

  #myNav {
  }
  .overlay {
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    /* background-color: var(--menu-toggle); */
    background: var(--back);
    overflow-y: hidden;
    transition: 0.5s;
  }

  .overlay-content {
    position: relative;
    top: 15%;
    width: 100%;
    text-align: left;
    font-style: italic;
    margin-top: 30px;
    background-color: var(--menu-toggle);
    padding-bottom: 300px;
  }

  .overlay-content span {
    width: calc(100vw);
  }

  .overlay-content span.SignIn a {
    margin-left: 0px;
    text-align: left;
    border-top: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);
    padding-left: 70px;
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: var(--white);
    display: block;
    transition: 0.3s;
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
    background: var(--menu-active);
  }

  .overlay .closebtn {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 60px;
    z-index: 1;
    color: var(--menu-active);
    font-weight: bold;
  }

  @media screen and (max-height: 425px) {
    .overlay {
      overflow-y: auto;
    }
    .overlay a {
      font-size: 20px;
    }
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
`;

export const Promo = styled.div`
  width: 100%;

  div.pShippMobile {
    color: var(--gray);
    font-style: italic;
    font-size: 16px;
    text-align: center;
    padding: 7px 0;

    background: var(--back-gray);
  }

  /* Ipad e Superiores */
  @media (min-width: 725px) {
    align-items: center;

    p.pShippMobile {
      display: none;
    }
  }
`;

const cssIcons = css`
  width: 50px;
  height: auto;
  padding: 10px;
  padding-left: 0;
  fill: var(--menu-toggle);
`;

export const MenuIcon = styled(Menu)`
  ${cssIcons}
  background: var(--back);

  @media (max-width: 268px) {
    div {
      width: 50px;
      height: 50px;
    }

    padding: 5px;
    padding-left: 0;
    fill: var(--menu-toggle);
  }

  @media (min-width: 426px) {
    display: none;
  }
`;

export const MagnifyingGlassIcon = styled(MagnifyingGlass)`
  width: 15px;
  height: 15px;
  fill: var(--texto-destaques);

  position: relative;
  left: 25px;
  top: -2px;

  @media (max-width: 425px) {
    display: none;
  }

  @media (min-width: 426px) and (max-width: 724px) {
    position: relative;
    left: 10px;
    top: 20px;
  }
`;

export const MagnifyingGlassIconOverlay = styled(MagnifyingGlass)`
  width: 15px;
  height: 15px;
  fill: var(--texto-destaques);

  position: relative;
  left: 25px;
  top: -2px;

  @media (max-width: 425px) {
    display: block;
    position: relative;
    left: 10px;
    top: 25px;
  }

  @media (min-width: 426px) {
    display: none;
  }
`;

const cssIconArrows = css`
  width: 10px;
  height: 10px;
  margin-left: 6px;

  fill: var(--white);
`;

export const DownArrowIcon = styled(DownArrow)`
  ${cssIconArrows}
`;
