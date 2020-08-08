import React, { useState } from 'react';
import { Container, Vitrine, Modal, OverlayModal } from './styles';
import imgProduto from '../../assets/aging-potion-wm.png';
import imgProduto2 from '../../assets/bulgeye-potion-wm.png';
import imgProduto3 from '../../assets/dragon-tonic-wm.png';

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <Modal>
          <OverlayModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            closeOnClick
          >
            <div className="Modal">
              <div>
                <img src={imgProduto} alt="Produto" />
              </div>
              <div>
                <h1>Aging Potion</h1>
                <h1>Use/Effect:</h1>
                <p>Causes the drinker to advance in age</p>
                <h1>Ingredients:</h1>
                <ul>
                  <li>Red Wine</li>
                  <li>Prune Juice</li>
                  <li>Hairy Fungus</li>
                  <li>Totoise Shell</li>
                  <li>Caterpillar</li>
                  <li>Bat Tongue</li>
                </ul>
                <h1 className="Price">Price</h1>
                <p className="Price">$29.99</p>
                <button type="text">ADD TO CART</button>
              </div>
            </div>
          </OverlayModal>
        </Modal>
        <p>Potions</p>
        <Vitrine>
          <div>
            <a onClick={() => setIsOpen(true)}>
              <img src={imgProduto} alt="Produto" />
            </a>
            <span>
              Aging potion<strong>$29.99</strong>
            </span>
          </div>

          <div>
            <img src={imgProduto2} alt="Produto" />
            <span>
              Bulgeye potion<strong>$19.99</strong>
            </span>
          </div>

          <div>
            <img src={imgProduto3} alt="Produto" />
            <span>
              Dragon tonic<strong>$64.99</strong>
            </span>
          </div>

          <div>
            <img src={imgProduto} alt="Produto" />
            <span>
              Love potion<strong>$29.99</strong>
            </span>
          </div>

          <div>
            <img src={imgProduto} alt="Produto" />
            <span>
              Polyjuice potion<strong>$99.99</strong>
            </span>
          </div>

          <div>
            <img src={imgProduto} alt="Produto" />
            <span>
              Sleeping draught<strong>$14.99</strong>
            </span>
          </div>
        </Vitrine>
      </Container>
    </>
  );
}

export default Main;
