import React from 'react';
import styled from 'styled-components';
// import SignUp from './SignUp';
// import SignIn from './SignIn';
import { Outlet } from 'react-router-dom';

const FormLogin = () => {
    return (
        <Wrapper>
            <div>
                <Outlet />
            </div>
            <div>
                <img src="https://moveek.com/bundles/ornweb/img/mascot.png" alt="" />
            </div>
        </Wrapper>
    )
}

export default FormLogin;

const Wrapper = styled.div`
    width: 80%;
    margin: 64px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    & > div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
    } 
    
    h2 {
        font-size: 36px;
        text-align: center;
        margin-bottom: 24px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        & > div:last-child {
            display: none;
        }
    }
`


