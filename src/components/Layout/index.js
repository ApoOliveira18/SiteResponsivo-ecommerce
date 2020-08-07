import React from 'react';

import Head from '../Head';
import Main from '../Main';
import Footer from '../Footer';

import { Container } from './styles';

function Layout() {
  return (
    <>
      <Container>
        <Head />
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
