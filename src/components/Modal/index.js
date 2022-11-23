import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { closeTrailer } from '../../services/slice/movieSlice';

const ModalVideo = () => {

    const { trailer, isOpenTrailer } = useSelector(state => state.movieSlice);
    const divWrap = useRef();
    const divLogin = useRef();
    const videoRef = useRef();
    const dispatch = useDispatch();

    const handleCloseLogIn = () => {
        dispatch(closeTrailer());
    }

    useEffect(() => {
        if (isOpenTrailer) {
            divWrap.current.style.visibility = 'visible';
            divWrap.current.style.backgroundColor = 'rgba(0,0,0,0.7)';
            divLogin.current.style.transform = 'translateY(0)';
            setTimeout(() => {
                videoRef.current.setAttribute('src', `${trailer}?autoplay=1&mute=1`);
            }, 500)
        } else {
            divWrap.current.style.visibility = 'hidden';
            divWrap.current.style.backgroundColor = 'transparent';
            divLogin.current.style.transform = 'translateY(-1000px)';
            setTimeout(() => {
                videoRef.current?.setAttribute('src', `${trailer}?autoplay=0&mute=1`);
            }, 500)
        }
    }, [isOpenTrailer, trailer])

    return (
        <Wrapper ref={divWrap} >
            <div className='wrapper'>
                <div ref={divLogin}>
                    <div className='closeModal'>
                        <AiOutlineClose onClick={handleCloseLogIn} />
                    </div>
                    {
                        isOpenTrailer && (
                            <div className='videoTrailer'>
                                <iframe ref={videoRef} title='1' width="100%" height="500px" allowFullScreen ></iframe>
                            </div>
                        )
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default memo(ModalVideo);

const Wrapper = styled.div`
    scroll-behavior: smooth;
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
        display: flex;
        justify-content: center;
        align-items: center;

        & > div {
            width: 100%;
            max-width: 70%;
            height: auto;
            transition: all 1s;
            background-color: #000;
            padding: 24px;
            transform: translateY(-100%);
            overflow: auto;

            .closeModal {
                width: 100%;
                color: #fff;
                text-align: right;
                font-size: 20px;
                transition: all 1s;   
                &:hover svg {
                    cursor: pointer;
                    color: var(--HoverTextColor);
                    transform: scale(1.2);
                }
            }
            .videoTrailer {
                iframe {
                    border: none;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .wrapper {
            & > div {
                .videoTrailer {
                    iframe {
                        height: 300px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 576px) {
        .wrapper {
            & > div {
                max-width: 80%;
                .videoTrailer {
                    iframe {
                        height: 250px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 400px) {
        .wrapper {
            & > div {
                max-width: 100%;
                .videoTrailer {
                    iframe {
                        height: 200px;
                    }
                }
            }
        }
    }
`


