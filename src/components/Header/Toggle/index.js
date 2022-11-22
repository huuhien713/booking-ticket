import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsCircleFill, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../../templates/ThemeContext';


const Toggle = () => {

    const themeContext = useContext(ThemeContext);

    const icon = useRef();
    const circle = useRef();

    const [isDark, setIsDark] = useState(false);

    const handleSetTheme = () => {
        setIsDark(!isDark);
        themeContext.toggleTheme();
    }

    useEffect(() => {
        if (isDark) {
            circle.current.style.transform = 'translateX(100%)';
            icon.current.style.transform = 'translateX(-100%)';
        } else {
            circle.current.style.transform = 'translateX(0)';
            icon.current.style.transform = 'translateX(0)';
        }
    }, [isDark])

    return (
        <Wrapper onClick={handleSetTheme}>
            <div>
                <div ref={circle}>
                    <BsCircleFill />
                </div>
                <div ref={icon}>
                    {isDark ? <BsSun /> : <HiOutlineMoon />}
                </div>
            </div>
        </Wrapper>
    )
}

export default Toggle;

const Wrapper = styled.div`
    position: relative;
    width: 60px;
    height: 30px;
    margin: 0 10px;
    padding: 4px 8px;
    border-radius: 20px;
    box-shadow: var(--BoxShadow);
    background-color: var(--BgButton);
    & > div {
        width: 100%;
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.5rem;
        div {
            padding: 0 3px;
            transition: all 0.5s;
            &:first-child {
                color: var(--IconColor);
            }
            &:last-child {
                color: #aaa;
            }
        }
    }
    
`
