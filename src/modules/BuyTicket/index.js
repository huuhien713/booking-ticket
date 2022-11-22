import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchDanhSachPhongVe } from '../../services/slice/movieSlice';
import { ThemeContext } from '../../templates/ThemeContext';
import DanhSachGhe from './DanhSachGhe';
import ThongTinPhim from './ThongTinPhim';
import 'reactjs-popup/dist/index.css';
import { themVe } from '../../services/slice/bookTicketSlice';

const BuyTicket = () => {
    const themeContext = useContext(ThemeContext);
    const { maLichChieu } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { danhSachPhongVe } = useSelector(state => state.movieSlice);
    // const { listVeDangDat } = useSelector(state => state.bookTicketSlice);
    const { thongTinPhim, danhSachGhe } = danhSachPhongVe;

    useEffect(() => {
        dispatch(fetchDanhSachPhongVe(maLichChieu));
    }, [maLichChieu, dispatch]);

    useEffect(() => {
        document.addEventListener('click', () => {
            dispatch(themVe([]));
        });
        return () => {
            document.removeEventListener('click', () => {
                dispatch(themVe([]));
            })
        }
    }, [location.pathname])
    return (
        <Wrapper className={themeContext.theme}>
            {
                danhSachGhe && (
                    <DanhSachGhe danhSachGhe={danhSachGhe} />
                )
            }
            {
                thongTinPhim && (
                    <ThongTinPhim thongTinPhim={thongTinPhim} />
                )
            }
        </Wrapper>
    )
}

export default BuyTicket;

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    padding: 32px 64px;

    & > div:last-child {
        width: 100%;
        margin: auto;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-around; 
        button {
            margin: 24px;
        }
        .modal {
            background-color: red;
        }
    }

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding: 16px;
    }
    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

const Modal = styled.div`
    .modalHeader {
        margin-bottom: 24px;
    }

    .modalContent{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 8px;
    }
`

