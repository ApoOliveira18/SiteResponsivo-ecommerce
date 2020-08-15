import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: var(--gray);
 }

 html, body, #root {
   font-size: 62.5%;
   max-height: 100vh;
   max-width: 100vw;

   width: 100%;
   height: 100%;
 }

 *, button, input {
   border: 0;
   background: none;
   font-family: 'Times';
   text-rendering: optimizeLegibility !important;
   -webkit-font-smoothing: antialiased !important;
 }

 html {
   background: var(--white);
 }
 :root {
  --primary: #222222;
  --secondary: #15181C;
  --search: #202327;
  --white: #D9D9D9;
  --gray: #7a7a7a;

  --menu-toggle: #523468;
  --menu-active: #422a53;
  --menu-dropdown: #E6E6FA;
  --back: #ffffff;
  --back-gray: #cccccc;
  --texto-destaques: #f00;
  --button-destaques: #f00;
 }

 @media (max-width: 42.5rem) {
  html, body, #root {
   font-size: 50%;
 }
}

@media (max-width: 76.8rem) {
  html, body, #root {
   font-size: 55%;
 }
`;
