import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../templates/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchHeThongRap } from '../../../services/slice/movieSlice';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { useViewport } from '../../../hooks';

const TheaterItem = () => {
    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cumRap } = useParams();
    const [screenWidth] = useViewport();

    const [show, setShow] = useState(false);
    const [name, setName] = useState(false);
    
    useEffect(() => {
        dispatch(fetchHeThongRap(cumRap));
    }, [cumRap])

    const { heThongRap } = useSelector(state => state.movieSlice);

    const [dsPhim, setDsPhim] = useState('');

    const handleSelectRap = (rap) => {
        setName(rap.tenCumRap)
        setShow(false);
        setDsPhim(rap);
    }


    return (
        <Wrapper className={themeContext.theme}>
            <Title>
                <h2>Lịch chiếu phim {cumRap}</h2>
            </Title>

            <Content>
                <Rap>         
                    {screenWidth <= 768 ?
                        (<>
                            <div className='selectRap' onClick={() => { setShow(true) }} style={{ position: 'relative' }}>
                                <div>
                                    <img src={heThongRap[0]?.lstCumRap[0]?.hinhAnh} alt={heThongRap[0]?.lstCumRap[0]?.maCumRap} />
                                </div>
                                <h4>{name || heThongRap[0]?.lstCumRap[0]?.tenCumRap}</h4>
                                <BsFillCaretDownFill style={{ position: 'absolute', right: 30 }} />
                            </div>
                        </>) : (<></>) 
                    }
                    {screenWidth > 768 || show ? 
                        (<>
                            {heThongRap[0]?.lstCumRap?.map((rap, index) => (
                                <div className='rapItem' key={index} onClick={() => { handleSelectRap(rap) }}>
                                    <div>
                                        <img src={rap.hinhAnh} alt={rap.maCumRap} />
                                    </div>
                                    <h4>{rap.tenCumRap}</h4>
                                </div>
                            ))}
                        </>) : (<></>)
                    }
                </Rap>

                <ChiTietPhim className='chiTietPhim'>
                    {(dsPhim || heThongRap[0]?.lstCumRap[0])?.danhSachPhim.map((phim, index) => {
                        if (phim.dangChieu) {
                            return (
                                <div key={index}>
                                    <Poster>
                                        <Link to={`/phim/${phim.maPhim}`}>
                                            <img src={phim.hinhAnh} alt="" />
                                        </Link>
                                    </Poster>
                                    <Details>
                                        <h4 onClick={() => { navigate(`/phim/${phim.maPhim}`) }}>{phim.tenPhim}</h4>
                                        <p>2D phụ đề</p>
                                        <div>
                                            {phim.lstLichChieuTheoPhim.map((item, index) => (
                                                <Link to={`/muave/${item.maLichChieu}`} key={index}>{item.ngayChieuGioChieu.slice(11, 16)}</Link>
                                            ))}
                                        </div>
                                    </Details>
                                </div>
                            )
                        }
                    })}
                </ChiTietPhim>
            </Content>
        </Wrapper>
    )
}

export default TheaterItem;

const Wrapper = styled.div`
    width: 100%;
    padding: 36px auto;  
`
const Title = styled.div`
    text-align: center;
    
    h2 {
        color: var(--HoverTextColor);
        margin-bottom: 24px;
        padding-top: 24px;
        font-size: 36px;
    }
`
const Content = styled.div`
    display: grid;
    width: 80%;
    margin: auto;
    padding-bottom: 24px;
    grid-template-columns: 1fr 2fr;
    gap: 10px;

    & > div {
        border-radius: 8px;
        border: 1px solid var(--BorderColor);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const Rap = styled.div`
    width: 100%;
    height: fit-content;
    overflow: hidden;

    & > div:last-child {
        border: none;
    }
    
    .rapItem {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--BorderColor);
        cursor: pointer;
        
        & > div {
            width: 80px;
            padding: 10px;

            img {
                width: 100%;
                display: block;
                border-radius: 8px;
                box-shadow: var(--BoxShadow);
                background-color: #fff;
            }
        }  
        
        &:hover {
            background-color: var(--BgContent);
            h4, span {
                color: #fff;
            }
        }
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        .selectRap {
            display: flex;
            align-items: center;
            border-bottom: 1px solid var(--BorderColor);
            cursor: pointer;
            & > div {
                width: 80px;
                padding: 10px;

                img {
                    width: 100%;
                    display: block;
                    border-radius: 8px;
                    box-shadow: var(--BoxShadow);
                    background-color: #fff;
                }
            }  
        }
    }
`
const ChiTietPhim = styled.div`
    width: 100%;
    & > div {
        display: grid;
        grid-template-columns: 1fr 7fr;
        padding: 16px;
        gap: 16px;
        border-bottom: 1px solid var(--BorderColor);
    }
    @media screen and (max-width: 992px) {
        & > div {
            grid-template-columns: 1fr 3fr;
            gap: 12px;
        }
    }
    @media screen and (max-width: 768px) {
        & > div {
            grid-template-columns: 1fr 2fr;
            gap: 8px;
        }
    }
    @media screen and (max-width: 600px) {
        & > div {
            grid-template-columns: 1fr 2fr;
            gap: 4px;
        }
    }
    @media screen and (max-width: 500px) {
        & > div {
            grid-template-columns: 1fr;
        }
    }
`
const Poster = styled.div`
    width: 100%;
    height: 100%;
    max-width: 180px;
    img {
        display: block;
        width: 100%;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: var(--BoxShadow);
    }
    @media screen and (max-width: 576px) {
        max-width: 120px;
    }
`
const Details = styled.div`
    h4 {
        cursor: pointer;
    }
    p {
        margin: 8px 0;
        user-select: none;
    }
    div {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 4px;
        
        a {
            display: block;
            text-align: center;
            padding: 4px 8px;
            border-radius: 4px;
            color: var(--TextColor);
            box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.4);
            cursor: pointer; 
            transition: all 0.5s;
            background-color: var(--BgContent);
            &:hover {
                color: #fff;
                background-color: var(--HoverTextColor);
            }
        }
    }
    @media screen and (max-width: 768px) {
        div {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`