import styled from 'styled-components';
import { Overlay } from 'react-portal-overlay';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  background: var(--back);
  height: auto;

  img {
    flex-shrink: 0;
    width: max(120px, min(150px, 44vw));
    height: max(120px, min(150px, 44vw));
  }

  p {
    text-align: center;
    font-size: 2rem;
    color: var(--primary);
    margin-top: 3rem;
  }
`;

export const Vitrine = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
    margin-bottom: 20px;

    span {
      font-size: 16px;
      color: var(--primary);
    }

    strong {
      font-size: 16px;
      color: var(--texto-destaques);
      margin-left: 3px;
      padding-right: 8px;
    }
  }

  /* Dispositivos Pequenos */
  @media (max-width: 42.5rem) {
    width: max(425px, 100%);
  }

  /* Ipads ou Superiores */
  @media (max-width: 76.8rem) {
    width: min(65rem, 100%);
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
`;

export const Modal = styled.div``;

export const OverlayModal = styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  div.Modal {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    background: var(--back);
    padding: 3rem;

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  div.Modal h1 {
    font-size: 17px;
    color: var(--primary);
    padding-bottom: 10px;
  }

  div.Modal p {
    font-size: 14px;
  }

  div.Modal ul li {
    font-size: 15px;
    list-style: none;
    padding-bottom: 2px;
    color: var(--primary);
  }

  div.Modal p.Price {
    color: var(--texto-destaques);
    font-size: 17px;
    font-weight: bold;
    line-height: 2px;
  }

  div.Modal h1.Price {
    color: var(--primary);
    padding-bottom: 5px;
    padding-top: 5px;
  }

  button {
    background: var(--button-destaques);
    color: var(--back);
    border-radius: 5px;
    padding: 9px;
    font-family: Sans-serif;
    font-size: 14px;
    width: 100%;
    max-width: 15rem;
    font-weight: bold;
    margin-top: 20px;
    border: none;
    cursor: pointer;
  }

  a:active,
  a:selected,
  a:visited {
    border: none;
    outline: none;
  }
`;
