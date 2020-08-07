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

  /* Add a black background color to the top navigation */
  .topnav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    background-color: var(--menu-toggle);
    overflow: hidden;
    display: block;
  }

  /* Style the links inside the navigation bar */
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

  /* Add an active class to highlight the current page */
  .active {
    background-color: var(--menu-active);
    color: white;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }

  /* Dropdown container - needed to position the dropdown content */
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

  /* Style the dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Style the links inside the dropdown */
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add a dark background on topnav links and the dropdown button on hover */
  .topnav a:hover,
  .dropdown:hover .dropbtn {
    background-color: #555;
    color: white;
  }

  /* Add a grey background to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Show the dropdown menu when the user moves the mouse over the dropdown button */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
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
