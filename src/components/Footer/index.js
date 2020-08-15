import React from 'react';

import {
  Container,
  FormContact,
  SocialMedia,
  Company,
  FaceIcon,
  TwitterIcon,
  PinterestIcon,
  TIcon,
  GoogleIcon,
} from './styles';

const Footer = () => (
  <Container>
    <FormContact>
      <fieldset>
        <h1>Sign up for or news letters</h1>
        <p>Sign up for or news letters e get exclusive discounts</p>
        <input type="text" placeholder="Enter your e-mail" />
        <button>SUBMIT</button>
      </fieldset>
    </FormContact>
    <SocialMedia>
      <Company className="company">
        <div className="comp">
          COMPANY<span className="colorText">RETURNS</span>
        </div>
        <div className="cont">
          CONTACT US <span className="colorText">CARRERS</span>
        </div>
        <div className="ship">SHIPPING</div>
      </Company>
      <div className="social">
        <FaceIcon />
        <TwitterIcon />
        <PinterestIcon />
        <TIcon />
        <GoogleIcon />
      </div>
      <div className="copyright">
        <p className="copyDesk">
          &#169;2015 Merlins Potions. All Rights Reserved
        </p>
      </div>
    </SocialMedia>
    <p className="copyMobi">&#169;2015 Merlins Potions. All Rights Reserved</p>
  </Container>
);

export default Footer;
