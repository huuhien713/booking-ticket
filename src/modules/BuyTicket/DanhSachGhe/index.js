import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { themVe } from '../../../services/slice/bookTicketSlice';

const DanhSachGhe = ({ danhSachGhe }) => {
    const dispatch = useDispatch();
    // const location = useLocation();
    // const { maLichChieu } = useParams();

    const { listVeDangDat } = useSelector(state => state.bookTicketSlice);

    const [veDangDat, setVeDangDat] = useState(listVeDangDat);

    useEffect(() => {
        setVeDangDat(listVeDangDat);
        dispatch(themVe(veDangDat));
    }, [listVeDangDat, veDangDat, dispatch]);


    const handleBooking = (ghe, e) => {
        const index = veDangDat.findIndex(ticket => ticket === ghe);
        e.target.classList.toggle('dangChon');
        if (index === -1) {
            setVeDangDat([...veDangDat, ghe]);
        } else {
            setVeDangDat(prev => prev.filter((ticket, i) => i !== index));
        }
    }

    return (
        <Wrapper>
            <StateGhe>
                <div className='chuThich'>
                    <div>
                        <div className='ghe dangChon'></div><span>Ghế Bạn Chọn</span>
                    </div>
                    <div>
                        <div className='ghe daChon'></div><span>Ghế Đã Bán</span>
                    </div>
                    <div>
                        <div className='ghe vip'></div><span>Ghế VIP</span>
                    </div>
                    <div>
                        <div className='ghe'></div><span>Ghế Thường</span>
                    </div>
                </div>
                <div className='screen'>Màn Hình</div>
            </StateGhe>
            <ListGhe>
                <ul>
                    <li><span>A</span></li>
                    <li><span>B</span></li>
                    <li><span>C</span></li>
                    <li><span>D</span></li>
                    <li><span>E</span></li>
                    <li><span>F</span></li>
                    <li><span>G</span></li>
                    <li><span>H</span></li>
                    <li><span>I</span></li>
                    <li><span>K</span></li>
                </ul>
                <div>
                    {danhSachGhe?.map((ghe, index) => {
                        let loaiGhe = '';
                        let trangThaiGhe = '';
                        if (ghe.loaiGhe === 'Vip') {
                            loaiGhe = 'vip';
                        }
                        if (ghe.daDat) {
                            loaiGhe = '';
                            trangThaiGhe = 'daChon';
                        }
                        else if ((veDangDat?.find(ticket => ticket === ghe)) !== undefined) {
                            trangThaiGhe = 'dangChon';
                        }
                        return (
                            <div key={index} className={`ghe ${loaiGhe} ${trangThaiGhe}`} onClick={(e) => { handleBooking(ghe, e) }}>
                                <input type="checkbox" />
                                {ghe.tenGhe}
                            </div>
                        )
                    })}
                </div>
            </ListGhe>
        </Wrapper>
    )
}

export default (DanhSachGhe);

const Wrapper = styled.div`
    .ghe {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 4px;
        font-size: 12px;
        border: 1px solid var(--BorderColor);
        background-color: var(--BgContent);
        user-select: none;

        input {
            width: 0;
            height: 0;
        }
    }
    .daChon {
        color: #fff;
        font-weight: 500;
        background-color: red;
        cursor: not-allowed;
        pointer-events: none;
    }
    .vip {
        color: #fff;
        font-weight: 500;
        background-color: #3B5998;
    }
    .dangChon {
        color: #fff;
        font-weight: 500;
        background-color: #00B300;
    }

    @media screen and (max-width: 768px) {
        .ghe {
            width: 25px;
            height: 25px;
            line-height: 25px;
        }
    }
    @media screen and (max-width: 576px) {
        .ghe {
            width: 20px;
            height: 20px;
            line-height: 20px;
            font-size: 10px;
        }
    }
`

const StateGhe = styled.div`
    padding: 0 0 0 48px;
    .chuThich {
        width: 100%;
        margin-bottom: 24px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        & > div {
            display: flex;
            align-items: center;
            span {
                font-weight: 500;
                margin-left: 16px;
            }
        }
    }
    .screen {
        width: 100%;
        text-align: center;
        padding: 8px;
        margin-bottom: 24px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        color: var(--TextContent);
        background-color: var(--BgContent);
    }
    @media screen and (max-width: 1024px) {
        padding: 0 0 0 32px;
    }
    @media screen and (max-width: 992px) {
        padding: 0 0 0 28px;
    }
    @media screen and (max-width: 820px) {
        padding: 0 16px 0 48px;
    }
    @media screen and (max-width: 576px) {
        padding: 0 0 0 16px;
        .chuThich {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px 0;
        }
    }
`
const ListGhe = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > ul:first-child {
        width: 48px;
        padding-right: 8px;
        display: grid;
        grid-template-rows: repeat(10, 1fr);
        gap: 16px;

        li {
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-weight: 500;
            color: var(--HoverTextColor);
        }
    }
    & > div:last-child {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        gap: 16px 8px;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        & > ul:first-child {
            width: 30px;
            gap: 8px;
        }
        & > div:last-child {
            gap: 8px 4px;
        }
    }
    @media screen and (max-width: 820px) {
        padding: 0 16px; 
        & > ul:first-child {
            width: 40px;
            gap: 16px;
        }
        & > div:last-child {
            gap: 16px 8px;
        }
    }
    @media screen and (max-width: 768px) {

        & > ul:first-child {
            width: 30px;
            gap: 8px;
            li {
                height: 25px;
            }
        }
        & > div:last-child {
            gap: 8px 4px;
        }
    }
    @media screen and (max-width: 576px) {
        padding: 0; 
        & > ul:first-child {
            width: 20px;
            padding-right: 4px;
            gap: 4px;
            li {
                height: 20px;
                line-height: 20px;
            }
        }
        & > div:last-child {
            gap: 4px 2px;
        }
    }
`

