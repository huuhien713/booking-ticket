import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import NgayChieu from './NgayChieu';

const Rap = ({ hethongrap, maRap }) => {
    const navigate = useNavigate();
    // console.log(hethongrap)
    return (
        <Wrapper>
            <div className='rapHienTai'>
                <img src={hethongrap?.logo} alt="" />
                <div>
                    <h4>{maRap?.tenCumRap || hethongrap?.lstCumRap[0].tenCumRap}</h4>
                    <p>{maRap?.diaChi || hethongrap?.lstCumRap[0].diaChi}</p>
                </div>
            </div>
            {/* <NgayChieu /> */}
            <ListPhim>
                {(maRap || hethongrap?.lstCumRap[0])?.danhSachPhim.map((phim, index) => {
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
            </ListPhim>
        </Wrapper>
    )
}

export default (Rap);

const Wrapper = styled.div`
    position: relative;
    height: 600px;
    border-left: 1px solid var(--BorderColor);

    .rapHienTai {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border-bottom: 1px solid var(--BorderColor);
        box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);
        background-color: var(--BgContent);
        z-index: 10;

        
        img {
            width: 60px;
            margin-right: 12px;
            display: block;
            border-radius: 10px;
            box-shadow: var(--BoxShadow);
        } 

        h4 {
            margin-bottom: 12px;
        }
        p {
            font-size: 0.8rem;
            color: #737373;
        }
    }
    @media screen and (max-width: 576px) {
        .rapHienTai {
            img {
                width: 40px;
            } 
        }
    }

`
const ListPhim = styled.div`
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    height: 522px;
    overflow-y: scroll;

    & > div {
        display: grid;
        grid-template-columns: 1fr 4fr;
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
        height: 180px;
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
