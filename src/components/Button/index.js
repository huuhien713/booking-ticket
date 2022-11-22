import React from 'react'
import styled from 'styled-components';

const Button = ({ children, onClick, type, ...props }) => {
    return (
        <Btn onClick={onClick}>
            {children}
        </Btn>
    )
}

export default Button;

const Btn = styled.button`
    width: 100%;
    font-size: 1rem;
    line-height: 2;
    padding: 8px 16px;
    margin: 12px 0;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    outline: none;
    border-radius: 8px;
    transition: all 0.5s;
    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
    }
`