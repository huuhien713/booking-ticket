import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../templates/ThemeContext'
import InfoCompany from './InfoCompany';
import Partner from './Partner';

const Footer = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <Wrapper className={themeContext.theme}>
            <Logo>
                <img src='https://moveek.com/bundles/ornweb/img/favicon-large.png' alt="" />
            </Logo>
            <InfoCompany />
            <Partner />
            <div>
                <a href="http://online.gov.vn/Home/WebDetails/52309">
                    <img src="https://moveek.com/bundles/ornweb/img/20150827110756-dathongbao.png" alt="" />
                </a>
            </div>
        </Wrapper>
    )
}

export default memo(Footer);


const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    padding: 16px 32px;
    gap: 20px;
    color: var(--TextContent);
    background-color: var(--BgContent);

    & > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;  
        img {
            display: block;
            width: 100%;
        }
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: 2fr 2fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        div {
            text-align: center;
        }
    }
    
    @media screen and (max-width: 500px) {
        & > div:last-child {
            display: none;
        }
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    padding: 16px;
    img {
        display: block;
        width: 100%;
    }
    @media screen and (max-width: 1024px) {
        display: none;
    }
`


