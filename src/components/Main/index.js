import React from 'react';
import { Container, Vitrine, ModalContainer } from './styles';
import { Link } from 'react-router-dom';
import agingpotion from '../../assets/aging-potion.png';
import bulgeyepotion from '../../assets/bulgeye-potion.png';
import dragontonic from '../../assets/dragon-tonic.png';
import lovepotion from '../../assets/love-potion.png';
import polyjuicepotion from '../../assets/polyjuice-potion.png';
import sleepingdraught from '../../assets/sleeping-draught.png';
import mytext from './script.js';
import JwModal from 'jw-react-modal';

function Main() {
  const gotTheText = mytext;
  let json = JSON.parse(gotTheText);

  return (
    <>
      <Container>
        <JwModal id="jw-modal-1">
          <button onClick={JwModal.close('jw-modal-1')}>
            <strong>FECHAR</strong>
          </button>
          <ModalContainer>
            <div className="Modal">
              <div>
                <img src={agingpotion} alt="Produto" />
              </div>

              <div>
                <h1>{json.potions[1].name}</h1>
                <h1>Use/Effect:</h1>
                <p>{json.potions[1].effect}</p>
                <h1>Ingredients:</h1>
                <ul>
                  <li>{json.potions[1].ingredients}</li>
                </ul>

                <h1>Price</h1>
                <p className="Price">{json.potions[1].price}</p>

                <button type="text">ADD TO CART</button>
              </div>
            </div>
          </ModalContainer>
        </JwModal>

        <JwModal id="jw-modal-2" className="jw-modal-body">
          <ModalContainer>
            <div className="Modal">
              <div>
                <img src={bulgeyepotion} alt="Produto" />
              </div>

              <div>
                <h1>{json.potions[2].name}</h1>
                <h1>Use/Effect:</h1>
                <p>{json.potions[2].effect}</p>
                <h1>Ingredients:</h1>
                <ul>
                  <li>{json.potions[2].ingredients}</li>
                </ul>

                <h1>Price</h1>
                <p className="Price">{json.potions[2].price}</p>

                <button type="text">ADD TO CART</button>
              </div>
            </div>
          </ModalContainer>

          <button onClick={JwModal.close('jw-modal-2')}>Close</button>
        </JwModal>

        <JwModal id="jw-modal-3" className="jw-modal-body">
          <ModalContainer>
            <div className="Modal">
              <div>
                <img src={dragontonic} alt="Produto" />
              </div>

              <div>
                <h1>{json.potions[3].name}</h1>
                <h1>Use/Effect:</h1>
                <p>{json.potions[3].effect}</p>
                <h1>Ingredients:</h1>
                <ul>
                  <li>{json.potions[3].ingredients}</li>
                </ul>

                <h1>Price</h1>
                <p className="Price">{json.potions[3].price}</p>

                <button type="text">ADD TO CART</button>
              </div>
            </div>
          </ModalContainer>

          <button onClick={JwModal.close('jw-modal-3')}>Close</button>
        </JwModal>

        <JwModal id="jw-modal-4" className="jw-modal-body">
          <ModalContainer>
            <div className="Modal">
              <div>
                <img src={lovepotion} alt="Produto" />
              </div>

              <div>
                <h1>{json.potions[4].name}</h1>
                <h1>Use/Effect:</h1>
                <p>{json.potions[4].effect}</p>
                <h1>Ingredients:</h1>
                <ul>
                  <li>{json.potions[4].ingredients}</li>
                </ul>

                <h1>Price</h1>
                <p className="Price">{json.potions[4].price}</p>

                <button type="text">ADD TO CART</button>
              </div>
            </div>
          </ModalContainer>

          <button onClick={JwModal.close('jw-modal-4')}>Close</button>
        </JwModal>

        <JwModal id="jw-modal-5" className="jw-modal-body">
          <ModalContainer>
            <div className="Modal">
              <div>
                <img src={polyjuicepotion} alt="Produto" />
              </div>

              <div>
                <h1>{json.potions[5].name}</h1>
                <h1>Use/Effect:</h1>
                <p>{json.potions[5].effect}</p>
                <h1>Ingredients:</h1>
                <ul>
                  <li>{json.potions[5].ingredients}</li>
                </ul>

                <h1>Price</h1>
                <p className="Price">{json.potions[5].price}</p>

                <button type="text">ADD TO CART</button>
              </div>
            </div>
          </ModalContainer>

          <button onClick={JwModal.close('jw-modal-5')}>Close</button>
        </JwModal>

        <JwModal id="jw-modal-6" className="jw-modal-body">
          <ModalContainer>
            <div className="Modal">
              <div>
                <img src={sleepingdraught} alt="Produto" />
              </div>

              <div>
                <h1>{json.potions[6].name}</h1>
                <h1>Use/Effect:</h1>
                <p>{json.potions[6].effect}</p>
                <h1>Ingredients:</h1>
                <ul>
                  <li>{json.potions[6].ingredients}</li>
                </ul>

                <h1>Price</h1>
                <p className="Price">{json.potions[6].price}</p>

                <button type="text">ADD TO CART</button>
              </div>
            </div>
          </ModalContainer>

          <button onClick={JwModal.close('jw-modal-6')}>Close</button>
        </JwModal>

        <p>Potions</p>
        <Vitrine>
          <div>
            <button onClick={JwModal.open('jw-modal-1')}>
              <Link to="">
                <img src={agingpotion} alt="Produto" />
              </Link>
            </button>
            <span>
              {json.potions[1].name}
              <strong>{json.potions[1].price}</strong>
            </span>
          </div>

          <div>
            <button onClick={JwModal.open('jw-modal-2')}>
              <Link to="">
                <img src={bulgeyepotion} alt="Produto" />
              </Link>
            </button>
            <span>
              {json.potions[2].name}
              <strong>{json.potions[2].price}</strong>
            </span>
          </div>

          <div>
            <button onClick={JwModal.open('jw-modal-3')}>
              <Link to="">
                <img src={dragontonic} alt="Produto" />
              </Link>
            </button>
            <span>
              {json.potions[3].name}
              <strong>{json.potions[3].price}</strong>
            </span>
          </div>

          <div>
            <button onClick={JwModal.open('jw-modal-4')}>
              <Link to="">
                <img src={lovepotion} alt="Produto" />
              </Link>
            </button>
            <span>
              {json.potions[4].name}
              <strong>{json.potions[4].price}</strong>
            </span>
          </div>

          <div>
            <button onClick={JwModal.open('jw-modal-5')}>
              <Link to="">
                <img src={polyjuicepotion} alt="Produto" />
              </Link>
            </button>
            <span>
              {json.potions[5].name}
              <strong>{json.potions[5].price}</strong>
            </span>
          </div>

          <div>
            <button onClick={JwModal.open('jw-modal-6')}>
              <Link to="">
                <img src={sleepingdraught} alt="Produto" />
              </Link>
            </button>
            <span>
              {json.potions[6].name}
              <strong>{json.potions[6].price}</strong>
            </span>
          </div>
        </Vitrine>
      </Container>
    </>
  );
}

export default Main;
