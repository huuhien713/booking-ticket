import React from 'react'
import { BsPlayCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { showTrailer, trailer } from '../../../services/slice/movieSlice';

const PosterPhim = () => {
    const dispatch = useDispatch();
    const { lichChieuPhim } = useSelector(state => state.movieSlice);
    return (
        <Poster>
            <img src={lichChieuPhim?.hinhAnh} alt="" />
            <Link alt="" onClick={() => { dispatch(trailer(lichChieuPhim.trailer)); dispatch(showTrailer()) }}>
                <BsPlayCircle />
            </Link>
        </Poster>
    )
}

export default PosterPhim;

const Poster = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:hover {
        a {
            opacity: 1;
        }
    }
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: cover;
        border: 1px solid var(--BorderColor);
    }
    a {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        font-size: 64px;
        transition: all 0.5s;
        transform: translate(-50%, -50%) scale(0.9);
        opacity: 0;
        cursor: pointer;
        color: #fff;
        z-index: 10;
        &:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
    }

    @media screen and (max-width: 576px) {
        max-width: 50%;
    }
    
`