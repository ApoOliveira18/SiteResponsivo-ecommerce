import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  MenuIcon,
  Header,
  MenuNav,
  MenuMobile,
  Promo,
  MagnifyingGlassIcon,
  MagnifyingGlassIconOverlay,
  DownArrowIcon,
} from './styles';
import logoImg from '../../assets/lg.png';
import bagImg from '../../assets/pote_mobile.png';

/* Open Menu Mobile*/
function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

/* Close Menu Mobile*/
function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

function Head() {
  return (
    <>
      <Container>
        <Header>
          <MenuMobile>
            <div id="myNav" className="overlay">
              <button className="closebtn" onClick={closeNav}>
                &times;
              </button>
              <div className="overlay-content">
                <form>
                  <MagnifyingGlassIconOverlay className="example" />
                  <input
                    className="Fm"
                    type="text"
                    placeholder="Search our stock"
                  ></input>
                </form>
                <span className="SignIn">
                  <Link to="#">Potions</Link>
                  <a href="#">Ingredients</a>
                  <a href="#">Books</a>
                  <a href="#">Suplies</a>
                  <a href="#">Charms</a>
                </span>
                <div className="topnav">
                  <span>
                    <a href="#">Sing In</a>
                    <strong className="styleOr">or</strong>
                    <a href="#">Sign Up</a>
                  </span>
                </div>
              </div>
            </div>

            <span onClick={openNav}>
              <MenuIcon />
            </span>
          </MenuMobile>
          <img src={logoImg} alt="Logotipo" />
          <form>
            <MagnifyingGlassIcon className="example" />
            <input type="text" placeholder="Search our stock"></input>
          </form>
          <div className="boxHeader">
            <p className="pShippDesk">
              Free shipping
              <br /> <strong>on orders over $50</strong>
            </p>
            <img src={bagImg} className="pote" alt="Carrinho de compras" />
            <span>
              BAG:<strong>1</strong>
            </span>
          </div>
        </Header>

        <MenuNav>
          <div className="topnav" id="myTopnav">
            <a href="#">
              Potions
              <DownArrowIcon />
            </a>
            <a href="#">
              Ingredients
              <DownArrowIcon />
            </a>
            <a href="#">
              Books
              <DownArrowIcon />
            </a>
            <div className="dropdown">
              <button className="dropbtn">
                Suplies
                <DownArrowIcon />
              </button>
              <div className="dropdown-content">
                <a href="#">Snacks</a>
                <a href="#">Frogs</a>
                <a href="#">Tarantulas</a>
              </div>
            </div>
            <a href="#">
              Charms
              <DownArrowIcon />
            </a>
            <a href="#" className="active">
              Clearence
              <DownArrowIcon />
            </a>
          </div>
          <div className="topnav">
            <span>
              <a href="#">Sing In</a>
              <strong>or</strong>
              <a href="#">Sign Up</a>
            </span>
          </div>
        </MenuNav>
        <Promo>
          <div className="pShippMobile">Free shipping on order over $50</div>
        </Promo>
      </Container>
    </>
  );
}

export default Head;
