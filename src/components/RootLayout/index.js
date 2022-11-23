import React from 'react';
import styled from 'styled-components';
import Header from '../Header'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer'
import ScrollRight from '../ScrollRight'
import ScrollLeft from '../ScrollLeft';
import ModalVideo from '../Modal';
import BackToTop from '../../modules/BackToTop';

const RootLayout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRight />
            <ScrollLeft />
            <ModalVideo />
            <BackToTop />
        </Container>
    )
}

export default RootLayout;

const Container = styled.div`
    scroll-behavior: smooth;
    max-width: 1920px;
    width: 100%;
    margin: auto;
    transition: all 1s;
    overflow: hidden;
`