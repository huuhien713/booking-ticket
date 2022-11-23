import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import LoadingContent from '../../components/Loading/LoadingContent';
import { fetchAllMovie, fetchHeThongRap, fetchHeThongRapChieu } from '../../services/slice/movieSlice';
import { ThemeContext } from '../../templates/ThemeContext';
import Showing from '../MainPage/Showing';
import HeThongRap from './HeThongRap';
import Rap from './Rap';


const LichChieu = () => {
    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMovie());
        dispatch(fetchHeThongRap('CGV'));
        dispatch(fetchHeThongRapChieu());
    }, [])

    const { heThongRap, movieList, isLoading } = useSelector(state => state.movieSlice);

    const [maRap, setMaRap] = useState();

    const selectRap = (cumRap) => {
        setMaRap(cumRap);
    }

    const comming = movieList.filter(item => item.sapChieu);

    return (
        <div className={themeContext.theme}>
            <Wrapper>
                <Title>
                    <strong>Lịch chiếu phim</strong>
                </Title>
                {<div className='tableLichChieu'>
                    <HeThongRap />
                    {heThongRap.map((hethongrap, index) => (
                        <div key={index} className='cumRap'>
                            {isLoading ? 
                            (<div style={{ height: '100%', transform: 'translateY(40%)' }}><LoadingContent /></div>) :
                            (<CumRap>
                                {hethongrap?.lstCumRap.map((cumRap, index) => (
                                    <div key={index} onClick={() => { selectRap(cumRap) }}>
                                        <img src={hethongrap?.logo} alt="" />
                                        <div>
                                            {cumRap.tenCumRap}
                                        </div>
                                    </div>
                                ))}
                            </CumRap>)}
                            <Rap hethongrap={hethongrap} maRap={maRap} />
                        </div>
                    ))}
                </div>}
            </Wrapper>
            <div>
                <Showing arrFilm={comming} nameList={'Comming Soon'} />
            </div>
        </div>
    )
}

export default LichChieu;

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    padding-bottom: 72px;

    .tableLichChieu {
        border-radius: 8px;
        border: 1px solid var(--BorderColor);
        box-shadow: var(--BoxShadow);
        
        .cumRap {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }
    }

    @media screen and (max-width: 992px) {
        width: 90%;

        & > div:last-child {            
            & > div:last-child {
                display: grid;
                grid-template-columns: 1fr;
            }
        }
    }

    @media screen and (max-width: 576px) {
        width: 100%;
        padding: 16px;
        & > div:last-child {            
            & > div:last-child {
                display: grid;
                grid-template-columns: 1fr;
            }
        }
    }
`

const Title = styled.div`
    text-align: center;
    padding-top: 36px;
    margin-bottom: 24px;
    
    strong {
        color: var(--HoverTextColor);
        font-size: 32px;
        margin: 0 8px;
        padding: 16px;
        cursor: pointer;
        transition: all 0.5s;
        border-radius: 10px;
        border-bottom: 1px solid transparent;
        
        &:hover {
            border-bottom: 1px solid var(--HoverTextColor);
        }
  }
`

const CumRap = styled.div`
    overflow-y: auto;
    height: 600px;
    
    & > div {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border-bottom: 1px solid var(--BorderColor);

        img {
            width: 40px;
            margin-right: 12px;
            display: block;
            border-radius: 10px;
            box-shadow: var(--BoxShadow);
            background-color: var(--BgContent);
        }

        &:hover {
            background-color: var(--BgContent);
        }
    }

    @media screen and (max-width: 992px) {
        height: 114px;
    }
`

