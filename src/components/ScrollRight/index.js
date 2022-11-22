import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { loginClose } from '../../services/slice/authSlice';
import SignInAtHome from '../../modules/FormLogin/SignInAtHome';

const ScrollRight = () => {

    const divWrap = useRef();
    const divLogin = useRef();
    const dispatch = useDispatch();

    const { isOpen } = useSelector(state => state.authSlice);

    const handleCloseLogIn = () => {
        dispatch(loginClose());
    }

    useEffect(() => {
        if (isOpen) {
            divWrap.current.style.visibility = 'visible';
            divWrap.current.style.backgroundColor = 'rgba(0,0,0,0.7)';
            divLogin.current.style.transform = 'translateX(0)';
        } else {
            divWrap.current.style.visibility = 'hidden';
            divLogin.current.style.transform = 'translateX(-100%)';
            divWrap.current.style.backgroundColor = 'transparent';
        }
    }, [isOpen])

    return (
        <Wrapper ref={divWrap} >
            <div className='wrapper'>
                <div ref={divLogin}>
                    <div className='closeModal'>
                        <AiOutlineClose onClick={handleCloseLogIn} />
                    </div>
                    {
                        isOpen && <SignInAtHome />
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default ScrollRight;

const Wrapper = styled.div`
    max-width: 1920px;
    margin: auto;
    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: all 1s;
    visibility: hidden;
    z-index: 100;
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        & > div {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            max-width: 350px;
            transition: all 1s;
            background-color: #fff;
            padding: 24px;
            transform: translateX(-100%);
        }
    }

    .closeModal {
        width: 100%;
        text-align: right;
        font-size: 20px;
        transition: all 0.5s;   
        &:hover svg {
            cursor: pointer;
            color: var(--HoverTextColor);
            transform: scale(1.2);
        }
    }

    h2 {
        font-size: 36px;
        text-align: center;
        margin-bottom: 24px;
    }
`

