import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchLichChieuPhim  } from '../../services/slice/movieSlice';
import DetailsPhim from './DetailsPhim';
import LichChieuPhim from './LichChieuPhim';
import PosterPhim from './PosterPhim';

const Phim = () => {
    const dispatch = useDispatch();
    
    const { maPhim } = useParams();
    
    const { lichChieuPhim } = useSelector(state => state.movieSlice);
    
    useEffect(() => {
        dispatch(fetchLichChieuPhim(maPhim));
    }, [maPhim, dispatch])

    return (
        <>
            <Wrapper>
                <div className='bgFilm' style={{ backgroundImage: `url("${lichChieuPhim?.hinhAnh}")` }}>
                    <div></div>
                </div>
                <div className='contentFilm'>
                    <div>
                        <PosterPhim />
                        <DetailsPhim />
                    </div>
                </div>
            </Wrapper>
            <LichChieuPhim />
        </>
    )
}

export default Phim;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    margin: auto;
    overflow: hidden;

    .bgFilm {
        width: 100%;
        height: 100%;
        filter: blur(3px);
        background-size: cover;
        background-position: center -85px;
        & > div {
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.65);
            z-index: 10;
            
        }
    }
    .contentFilm {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;

        & > div {
            width: 90%;
            height: 100%;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 3fr;
            grid-template-rows: 400px;
            gap: 16px;
            color :#fff;
            padding: 50px;
        }
    }

    @media screen and (max-width: 1024px) {
        .contentFilm {
            & > div {
                grid-template-columns: 1fr 2fr;
            }
        }
    }
    @media screen and (max-width: 912px) {
        .contentFilm {
            & > div {
                grid-template-columns: 1fr 1fr;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .contentFilm {
            & > div {
                grid-template-columns: 1fr 1fr;
                gap: 12px;
                padding: 32px;
            }
        }
    }
    @media screen and (max-width: 576px) {
        .contentFilm {
            & > div {
                grid-template-columns: 1fr;
                grid-template-rows: 150px 250px;

            }
        }
    }
    @media screen and (max-width: 576px) {
        .contentFilm {
            gap: 0;
        }
    }
    
`

