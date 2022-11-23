import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../../templates/ThemeContext';
import NgayChieu from '../NgayChieu'

const LichChieuPhim = () => {
    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();
    // lấy dữ liệu về từ redux
    const { lichChieuPhim } = useSelector(state => state.movieSlice);
    // tao state lưu trữ dữ liệu từ redux mới lấy về
    const [cumRap, setCumRap] = useState(lichChieuPhim?.heThongRapChieu);
    // useState ko nhận đc dữ liệu lấy từ redux về, nó chỉ nhận giá trị khởi tạo tại chổ
    // => ta phải tạo useEffect, setState = dữ liệu cần đưa vào
    // useEEffect quản lý dữ liệu nhận về từ redux, với deps là giá trị nhận về
    useEffect(() => {
        setCumRap(lichChieuPhim?.heThongRapChieu);
    }, [lichChieuPhim?.heThongRapChieu])
    // hàm thay đổi setState
    const getRapChieu = (cumRap) => {
        setCumRap([cumRap])
    }

    return (
        <Wrapper className={themeContext.theme}>
            <Title>
                <h2>Lịch chiếu phim {lichChieuPhim?.tenPhim}</h2>
            </Title>
            <div>
                <NgayChieu />
                <HeThongRapChieu>
                    <div onClick={() => {setCumRap(lichChieuPhim?.heThongRapChieu)}}>
                        <img src="https://static.mservice.io/next-js/_next/static/public/cinema/dexuat-icon.svg" alt="" />
                        <p>Tất cả</p>
                    </div>
                    {lichChieuPhim?.heThongRapChieu?.map((heThongRap, index) => (
                        <div key={index} onClick={() => { getRapChieu(heThongRap) }}>
                            <img src={heThongRap.logo} alt="" />
                            <p>{heThongRap.tenHeThongRap}</p>
                        </div>
                    ))}
                </HeThongRapChieu>
                {cumRap?.map((heThongRap, index) => (
                    <React.Fragment key={index}>
                        {heThongRap?.cumRapChieu?.map((cumRap, index) => (
                            <React.Fragment key={index}>
                                <RapChieu>
                                    <div>
                                        <img src={cumRap.hinhAnh} alt="" />
                                        <div>
                                            <h4>{cumRap.tenCumRap}</h4>
                                            <p>{cumRap.diaChi}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {cumRap.lichChieuPhim.map((phim, index) => (
                                            <Link  key={index} to={`/muave/${phim.maLichChieu}`}>{phim.ngayChieuGioChieu.slice(11, 16)}</Link>
                                        ))}
                                    </div>
                                </RapChieu>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </Wrapper>
    )
}

export default LichChieuPhim;

const Wrapper = styled.div`
    width: 100%;
    padding: 36px;

    & > div:last-child {
        width: 90%;
        margin: auto;
        border-radius: 8px;
        border: 1px solid var(--BorderColor);
        box-shadow: var(--BoxShadow);
        overflow: hidden;
    }
    @media screen and (max-width: 576px) {
        padding: 24px 8px;
        & > div:last-child {
            width: 95%;
        }
    }
`

const Title = styled.div`
    width: 90%;
    margin: auto;
    h2 {
        color: var(--HoverTextColor);
        margin-bottom: 24px;
        font-size: 24px;
    }
    @media screen and (max-width: 576px) {
        width: 95%;
    }
`

const HeThongRapChieu = styled.div`
    padding: 12px 16px;
    display: flex;
    border-bottom: 1px solid var(--BorderColor);    
    user-select: none;

    div {
        width: 80px;
        text-align: center;
        
        img {
            width: 50px;
            border-radius: 10px;
            box-shadow: var(--BoxShadow);
            transition: all 0.5s;
        }
        p {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 8px;
            text-transform: capitalize;
            color: var(--TextContent);
            transition: all 0.5s;
        }

        &:hover {
            img {
                background-color: var(--TextColor);
                border: 1px solid var(--HoverTextColor);
            }
            p {
                color: var(--HoverTextColor);
            }
        }
    }
    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }
    @media screen and (max-width: 576px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
    @media screen and (max-width: 400px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`

const RapChieu = styled.div`
    border-bottom: 1px solid var(--BorderColor);   

    & > div:first-child {
        display: flex;
        align-items: center;
        padding: 16px 24px;
        
        img {
            width: 40px;
            margin-right: 12px;
            display: block;
            border-radius: 10px;
            box-shadow: var(--BoxShadow);
        }

        & > div {
            p {
                margin-top: 8px;
            }
        }

        &:hover {
            background-color: var(--HoverBgColor);
        }
        
    }
    & > div:last-child {
        padding: 8px 16px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 8px;
        a {
            display: block;
            text-align: center;
            padding: 4px 8px;
            border-radius: 4px;
            border: 1px solid var(--BorderColor);
            color: var(--TextColor);
            box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.4);
            cursor: pointer; 
            transition: all 0.5s;
            &:hover {
                color: #fff;
                background-color: var(--HoverTextColor);
            }
        }
    }
    @media screen and (max-width: 576px) {
        
    }
    @media screen and (max-width: 400px) {
        & > div:last-child {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`