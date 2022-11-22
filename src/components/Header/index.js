import React, { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

import { ThemeContext } from '../../templates/ThemeContext';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl'
import { useScrollY } from '../../hooks'

import HeaderNav from './Nav';
import FeatureNav from './FeatureNav';

const Header = () => {
    // khai báo sử dụng theme
    const themeContext = useContext(ThemeContext);
    // khai báo state width
    const [width, setWidth] = useState(window.innerWidth);
    // khai báo breakpoint
    const breakPoint = 912;
    // useEffect kiểm tra sự thay đổi của width của màn hình
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);
    // dom tới các thẻ
    const nav = useRef();
    const iconMenu = useRef();
    // khai báo state isShow
    const [isShow, setIsShow] = useState(false);
    // hàm xử lý sự kiện click
    const isShowNavbar = (e) => {
        if (iconMenu.current !== null && iconMenu.current !== undefined) {
            setIsShow(iconMenu.current.contains(e.target));
        }
    }
    // useEffect kiểm tra trạng thái click vào menu
    useEffect(() => {
        if (isShow) {
            nav.current.style.height = '320px';
        } else {
            nav.current.style.height = '0';
        }
        document.addEventListener('click', isShowNavbar);
        return () => {
            document.removeEventListener('click', isShowNavbar);
        }
    }, [isShow])

    const navigate = useNavigate();

    const [scrollY] = useScrollY();

    const styleNavigation = {
        position: 'fixed',
        maxWidth: '1920px',
        width: '100%',
        zIndex: 100,
        backgroundColor: 'var(--BgContent)',
    }

    return (
        <div className={themeContext.theme} style={scrollY > 50 ? styleNavigation : {}}>
            <Container>
                {
                    width > breakPoint ?
                        <>
                            <Logo onClick={() => navigate('/')}>
                                <img src='https://moveek.com/bundles/ornweb/img/logo.png' alt='' />
                            </Logo>
                            <HeaderNav />
                        </> :
                        <div style={{ padding: '10px' }} ref={iconMenu} onClick={isShowNavbar}>
                            <SlMenu />
                        </div>
                }
                <FeatureNav />
                <Navbar ref={nav} className={themeContext.theme}>
                    <li>
                        <Logo onClick={() => navigate('/')}>
                            <img src='https://moveek.com/bundles/ornweb/img/logo.png' alt='' />
                        </Logo>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to='lichchieu'>Lịch Chiếu</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to='rap'>Rạp</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to='tintuc'>Tin Tức</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { color: 'red' } : undefined} to='ungdung'>Ứng Dụng</NavLink>
                    </li>
                </Navbar>
            </Container>
        </div>
    )
}

export default memo(Header);

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    height: 80px;
    padding: 16px 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--BgContent);
    
    @media screen and (max-width: 575px) {
        height: 50px;
        padding: 0px 16px;
    }
`

const Logo = styled.div`
    width: 10%;
    height: 100%;
    border-radius: 4px;
    
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`
const Navbar = styled.ul`
    position: absolute;
    width: 100%;
    height: 0;
    top: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
    transition: all 0.5s;
    box-shadow: var(--BoxShadow);
    z-index: 100;
    li {
        &:first-child {
            padding: 10px 20px;
            div {
                width: 100%;
                img {
                    width: 100px;
                }
            }
        }
        margin: 10px 0;
        width: 100%;
        &:hover {
            color: #fff;
            background-color: var(--HoverBgColor);
        }
        a {
            display: block;
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.5s;
            color: var(--TextColor);
        }
        svg {
            margin-left: 5px;
            vertical-align: bottom;
        }
    }

`
