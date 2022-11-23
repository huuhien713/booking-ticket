import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DetailsPhim = () => {
    const { lichChieuPhim } = useSelector(state => state.movieSlice);

    const arrStar = [];
    const renderStar = (number) => {
        for (let i = 0; i < number; i++) {
            arrStar.push(<AiTwotoneStar key={i} />);
        }
        return arrStar;
    };
    return (
        <Details>
            <h1>{lichChieuPhim?.tenPhim}</h1>
            <div>
                <strong>Nội Dung</strong>
                <p>{`${lichChieuPhim?.moTa?.slice(0, 250)}...`}</p>
            </div>
            <div className='subInfo'>
                <div>
                    <p>ngày chiếu</p>
                    <p>{lichChieuPhim?.ngayKhoiChieu?.slice(0, 10)}</p>
                </div>
                <div>
                    <p>đánh giá</p>
                    <p>{renderStar(lichChieuPhim?.danhGia)}</p>
                </div>
                <div>
                    <p>Quốc Gia</p>
                    <p>Mỹ</p>
                </div>
            </div>
        </Details>
    )
}

export default DetailsPhim;

const Details = styled.div`
    margin: 64px 0;

    h1 {
        margin-bottom: 8px;
    }
    & > div:first-of-type {
        strong {
            font-size: 1rem;
        }
        p {
            margin: 24px 0;
            line-height: 2;
            color: rgba(255,255,255,0.7);
            letter-spacing : 1px;
        }
    }
    .subInfo {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        text-transform: capitalize;
        p:last-child {
            font-weight: 700;
            margin-top: 16px;
            svg {
                color: #FFB400;
                font-size: 20px;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        margin: 32px 0;
    }

    @media screen and (max-width: 912px) {
        & > div:first-of-type {
            p {
                line-height: 1.5;
                margin: 8px 0 16px 0;
            }
        }
    }
    
    @media screen and (max-width: 768px) {
        margin: 32px 0;
        & > div:first-of-type {
            p {
                line-height: 1.2;
                margin: 6px 0 12px 0;
            }
        }
        .subInfo {
            p:last-child {
                margin-top: 8px;
                svg {
                    color: #FFB400;
                    font-size: 12px;
                }
            }
        }
    }
    @media screen and (max-width: 576px) {
        margin: 0;
        h1 {
            font-size: 24px;
        }
        & > div:first-of-type {
            p {
                margin: 4px 0 8px 0;
                font-size: 0.75rem;
            }
        }
        .subInfo {
            p:last-child {
                margin-top: 8px;
                svg {
                    color: #FFB400;
                    font-size: 12px;
                }
            }
        }
    }
    @media screen and (max-width: 400px) {
        margin: 0;
        h1 {
            font-size: 20px;
        }
        & > div:first-of-type {
            p {
                margin: 8px 0 16px 0;
                font-size: 0.75rem;
            }
        }
        .subInfo {
            p:last-child {
                margin-top: 8px;
                svg {
                    color: #FFB400;
                    font-size: 12px;
                }
            }
        }
    }
`