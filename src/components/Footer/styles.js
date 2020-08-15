import styled, { css } from 'styled-components';
import {
  FacebookCircle,
  TwitterWithCircle,
  PinterestWithCircle,
  TumblrWithCircle,
  GooglePlusCircle,
} from '../../styles/Icons';

export const Container = styled.div`
  background: var(--back-gray);
  padding-top: 3px;
  height: auto;
  min-height: 140px;
  width: 100%;
  margin-bottom: 0;

  p.copyMobi {
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--gray);
    text-align: center;
    padding-top: 5px;
    padding-bottom: 20px;
  }

  p.copyDesk {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--gray);
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 425px) {
    div.company {
      display: none;
    }

    div.copyright {
      display: none;
    }
  }

  @media (min-width: 426px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .copyMobi {
      display: none;
    }

    div.copyDesk {
      display: block;
    }
  }
`;

export const FormContact = styled.div`
  width: 90%;
  margin: 10px auto;
  background: var(--back);
  border-radius: 5px;

  color: var(--gray);
  font-size: 16px;
  line-height: 30px;

  fieldset {
    padding: 10px;
  }

  h1 {
    font-style: italic;
    font-size: 16px;
  }

  p {
    color: var(--gray);
  }

  input {
    border: solid 1px var(--gray);
    width: 20rem;
    padding: 4px;
    border-radius: 3px;
  }

  button {
    background: var(--button-destaques);
    color: var(--back);
    border-radius: 3px;
    padding: 7px;
    font-family: Sans-serif;
    font-size: 11px;
    margin-left: 3px;
    width: 100%;
    max-width: 15rem;
    font-weight: bold;
    cursor: pointer;
  }

  @media (min-width: 426px) {
    order: 1;
    width: 50%;
    margin-right: 30px;
  }
`;

const cssIcons = css`
  width: 55px;
  height: auto;
  padding: 25px;
  padding-left: 0;
  fill: var(--menu-toggle);
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    div {
      padding-left: 15px;
      margin-top: 12px;
    }

    div.social {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 100%;
      padding-left: 45px;

      > svg {
        width: 45px;
        height: auto;
      }
    }

    div.copyright {
      padding-left: 40px;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Company = styled.div`
  @media (min-width: 426px) {
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 20px;

    font-size: 1.5rem;

    div {
      color: var(--texto-destaques) !important;
      margin-right: 0px;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 5px;
    }

    span.colorText {
      color: var(--texto-destaques) !important;
    }
  }

  @media (min-width: 426px) {
    width: 100%;
    /* margin-left: 1rem; */
  }
`;

export const FaceIcon = styled(FacebookCircle)`
  ${cssIcons}
`;

export const TwitterIcon = styled(TwitterWithCircle)`
  ${cssIcons}
`;

export const PinterestIcon = styled(PinterestWithCircle)`
  ${cssIcons}
`;

export const TIcon = styled(TumblrWithCircle)`
  ${cssIcons}
`;

export const GoogleIcon = styled(GooglePlusCircle)`
  ${cssIcons}
`;
