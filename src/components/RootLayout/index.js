import React from 'react';
import styled from 'styled-components';
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';
import ScrollRight from '../ScrollRight'
import ScrollLeft from '../ScrollLeft';
import ModalVideo from '../Modal';

const RootLayout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRight />
            <ScrollLeft />
            <ModalVideo />
        </Container>
    )
}

export default RootLayout;

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: auto;
  transition: all 1s;
  overflow: hidden;
`