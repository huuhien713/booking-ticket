import React from 'react'
import styled from 'styled-components';
import { MdArrowDropUp } from 'react-icons/md';
import { useScrollY } from '../../hooks';

const BackToTop = () => {
    const [scrollY] = useScrollY();

    const handleTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    return (
        <> 
            {scrollY > 500 ?
            (<Wrapper onClick={(e) => handleTop(e)}>
                <div>
                    <MdArrowDropUp />
                </div>
            </Wrapper>) : (<></>)}
        </>
    )
}

export default BackToTop;

const Wrapper = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    z-index: 200;
    cursor: pointer;
    div {
        padding: 5px;
        border-radius: 8px;
        background-color: #263238;
        svg {
            color: #fff;
            font-size: 30px;
        }
    }
`