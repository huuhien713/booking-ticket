import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <Navbar>
                <li>
                    <NavLink to='lichchieu' style={({ isActive }) => isActive ? {color: 'red'} : undefined}>Lịch Chiếu</NavLink>
                </li>
                <li>
                    <NavLink to='rap' style={({ isActive }) => isActive ? {color: 'red'} : undefined}>Rạp</NavLink>
                </li>
                <li>
                    <NavLink to='tintuc' style={({ isActive }) => isActive ? {color: 'red'} : undefined}>Tin Tức</NavLink>
                </li>
                <li>
                    <NavLink to='ungdung' style={({ isActive }) => isActive ? {color: 'red'} : undefined}>Ứng Dụng</NavLink>
                </li>
            </Navbar>
        </>
    )
}

export default Nav;

const Navbar = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
        text-align: center;
        &:hover a {
            cursor: pointer;
            color: var(--HoverTextColor);
        }
        a {
            position: relative;
            color: var(--TextColor);
            font-size: 1rem;
            font-weight: 500;
            margin: 8px;
            padding: 8px 8px 16px;
            &::after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0%;
                height: 1px;
                transition: all 0.5s;
                background-color: transparent;
            }
            &.active::after{
                width: 100%;
                background-color: red;
            }
        }
        svg {
            margin-left: 5px;
            vertical-align: bottom;
        }
    }
`