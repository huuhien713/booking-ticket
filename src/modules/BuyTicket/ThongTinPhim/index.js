import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import Button from '../../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SlClose } from 'react-icons/sl'
import { datVe, themVe } from '../../../services/slice/bookTicketSlice';

const ThongTinPhim = ({ thongTinPhim }) => {
    const { maLichChieu } = useParams();

    const { listVeDangDat } = useSelector(state => state.bookTicketSlice);
    const { user } = useSelector(state => state.authSlice);

    const [check, setCheck] = useState('ZaloPay');
    const [isOpen, setIsOpen] = useState(false);
    const [countDown, setCountDown] = useState(300);

    let min = Math.floor((countDown / 60) << 0);
    let sec = Math.floor((countDown) % 60);

    useEffect(() => {
        const temp = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000)
        return () => {
            clearInterval(temp)
        }
    }, [countDown]);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const listVe = listVeDangDat.map((item) => {
        return { 'maGhe': item.maGhe, 'giaVe': item.giaVe };
    })

    const handleCancel = () => {
        dispatch(themVe([]));
        navigate('/');
    }

    const handleThanhToan = (e) => {
        dispatch(datVe({
            "maLichChieu": maLichChieu,
            "danhSachVe": listVe
        }));

        setIsOpen(true);
    }
    // console.log(window.location);
    return (
        <ThongTin>
            <div className='thongTinVe'>
                <h1>{thongTinPhim.tenPhim}</h1>
                <div>
                    <strong>{thongTinPhim.tenCumRap}</strong>
                </div>
                <div>
                    Suất: <strong>{thongTinPhim.gioChieu}</strong>
                </div>
                <div>
                    Ngày: <strong>{thongTinPhim.ngayChieu}</strong>
                </div>
                <div>
                    Rạp: <strong>{thongTinPhim.tenRap.slice(4)}</strong> - Ghế: <strong>{(listVeDangDat.reduce((result, item, index) => (result += item.tenGhe + ', '), ''))}</strong>
                </div>
            </div>
            <div className='tongTien'>
                <div>
                    <span>Tổng Số Tiền</span>
                    <p>{(listVeDangDat.reduce((result, item, index) => (result += +item.giaVe), 0)).toLocaleString()} đ</p>
                </div>
                <div></div>
                <div>
                    Thời Gian Giữ Ghế
                    {countDown > 0 ?
                        (<p>{min}:{sec > 9 ? sec : `0${sec}`}</p>) :
                        (<p>00:00</p>)}
                </div>
            </div>
            <div className='hinhThucThanhToan'>
                <h2>Hình Thức Thanh Toán</h2>
                <div>
                    <input type="radio" name='thanhToan' value={'ZaloPay'} checked={check === 'ZaloPay'} onChange={(e) => setCheck(e.target.value)} />
                    <p>Thanh toán qua ZaloPay</p>
                </div>
                <div>
                    <input type="radio" name='thanhToan' value={'Visa'} checked={check === 'Visa'} onChange={(e) => setCheck(e.target.value)} />
                    <p>Visa, Master, JCB</p>
                </div>
                <div>
                    <input type="radio" name='thanhToan' value={'Atm'} checked={check === 'Atm'} onChange={(e) => setCheck(e.target.value)} />
                    <p>Thẻ ATM nội địa</p>
                </div>
                <div>
                    <input type="radio" name='thanhToan' value={'Store'} checked={check === 'Store'} onChange={(e) => setCheck(e.target.value)} />
                    <p>Thanh toán tại cửa hàng tiện ích</p>
                </div>
            </div>
            {
                (listVeDangDat.length !== 0 && check) ? <Button onClick={() => handleThanhToan()}>THANH TOÁN</Button> : <Button onClick={() => handleCancel()}>QUAY LẠI</Button>
            }
            <Popup modal open={countDown <= 0 ? true : false}>
                <Modal>
                    <div>
                        <span style={{lineHeight: 2}}>Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút. </span>
                        <a href={`${window.location.href}`} style={{textDecoration: 'none', color: 'var(--HoverTextColor)'}} >Đặt vé lại</a>
                    </div>
                </Modal>
            </Popup>
            <Popup
                modal
                nested
                open={isOpen}
                closeOnEscape={false}
                closeOnDocumentClick={false}
            >
                {(
                    <Modal className="modal">
                        <>
                            <div className='close'>
                                <button onClick={() => { handleCancel(); setIsOpen(false) }}><SlClose /></button>
                            </div>
                            <div className='modalHeader'>
                                <h2>Thông Tin Chi Tiết Vé</h2>
                            </div>
                            <div className='modalContent'>
                                <div>
                                    <img src={thongTinPhim.hinhAnh} width={'100%'} height={'auto'} alt="" />
                                </div>
                                <div>
                                    <h3>{thongTinPhim.tenPhim}</h3>
                                    <div>
                                        <strong>{thongTinPhim.tenCumRap}</strong>
                                    </div>
                                    <div>
                                        Suất: <strong>{thongTinPhim.gioChieu}</strong>
                                    </div>
                                    <div>
                                        Ngày: <strong>{thongTinPhim.ngayChieu}</strong>
                                    </div>
                                    <div>
                                        Rạp: <strong>{thongTinPhim.tenRap.slice(4)}</strong> - Ghế: <strong>{(listVeDangDat.reduce((result, item, index) => (result += item.tenGhe + ', '), ''))}</strong>
                                    </div>
                                </div>
                                <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Họ Tên</td>
                                                <td>:</td>
                                                <td>{user.hoTen}</td>
                                            </tr>
                                            <tr>
                                                <td>Số điện thoại</td>
                                                <td>:</td>
                                                <td>{user.soDT}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>:</td>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Trạng Thái</td>
                                                <td>:</td>
                                                <td>đặt vé thành công qua <strong>{check}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Tổng Tiền</td>
                                                <td>:</td>
                                                <td><strong>{(listVeDangDat.reduce((result, item, index) => (result += +item.giaVe), 0)).toLocaleString()} đ</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='modalFooter'>
                                <Button onClick={() => { handleCancel(); setIsOpen(false) }}>Quay về trang chủ</Button>
                            </div>
                        </>
                    </Modal>
                )}
            </Popup>
        </ThongTin>
    )
}

export default ThongTinPhim;

const ThongTin = styled.div`
    & > div {
        width: 100%;
        padding: 16px;
        margin-bottom: 16px;
        border-radius: 8px;
        border: 1px solid var(--BorderColor);
        background-color: var(--BgContent);
    }
    .thongTinVe {
        h1 {
            color: var(--HoverTextColor);
            margin-bottom: 16px;
        }
        div {
            margin-bottom: 8px;
        }
    }
    .tongTien {
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        font-weight: 500;
        color: var(--TextContent);

        p {
            color: var(--HoverTextColor);
            font-size: 32px;
            margin-top: 8px;
        } 

        & > div:nth-child(2) {
            border: 1px solid #aaa; 
        }

        & > div:last-child {
            text-align: right;   
            
        }
    }
    .hinhThucThanhToan {
        input[type="radio"] {
            /* Add if not using autoprefixer */
            -webkit-appearance: none;
            appearance: none;
            /* For iOS < 15 to remove gradient background */
            background-color: #fff;
            /* Not removed via appearance */
            margin: 0;
            appearance: none;
            background-color: #fff;
            margin: 0;
            font: inherit;
            color: #aaa;
            width: 1.15em;
            height: 1.15em;
            border: 2px solid #aaa;
            border-radius: 50%;
            transform: translateY(-0.075em);
            display: grid;
            place-content: center;
        }


        input[type="radio"]::before {
            content: "";
            width: 0.65em;
            height: 0.65em;
            border-radius: 50%;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            background-color: var(--HoverTextColor);
        }

        input[type="radio"]:checked::before {
            transform: scale(1);
        }

        & > div {
            padding: 16px 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #aaa;
        }
    }

    strong {
        color: var(--HoverTextColor);
    }

    @media screen and (max-width: 992px) {
        .thongTinVe {
            h1 {
                font-size: 24px;
            }
        }
        .tongTien {
            p {
                font-size: 20px;
            }
        }
    }
`

const Modal = styled.div`
    padding: 24px;
    
    & > .close {
        cursor: pointer;
        display: block;
        position: absolute;
        right: 10px;
        top: 10px;
        button {
            border: none;
            outline: none;
            background-color: transparent;
            font-size: 30px;
        }
    }
    .modalHeader {
        color: var(--HoverTextColor);
        margin-bottom: 24px;
    }
    .modalContent{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 16px;
        border-bottom: 1px solid #ddd;

        & > div:first-child {
            img {
                border-radius: 8px; 
                height: 100%;
            }
        }
        & > div:nth-child(2) {
            text-align: left;
            h3 {
                font-size: 24px;
                margin-bottom: 16px;
            }
            div {
                margin-bottom: 8px;
            }
        }
        & > div:last-child {
            grid-column: 1/ span 2;
            table {
                margin-bottom: 12px;
                text-align: left;
                td {
                    padding: 8px;
                    &:nth-child(1) {
                        width: 35%;
                    }
                    &:nth-child(2) {
                        width: 5%;
                    }
                    &:nth-child(3) {
                        width: 60%;
                    }
                }
            }
        }
        strong {
            color: var(--HoverTextColor);
        }
    }
    .modalFooter {
        width: 100%;
        display: flex;
        margin-top: 12px;
        button {
            margin: 8px 24px 4px;
            padding: 0px;
        }
    }
    @media screen and (max-width: 1024px) {
        padding: 16px;
        .modalContent{
            grid-template-columns: 1fr;
            & > div:first-child {
                display: none;
            }
            & > div:nth-child(2) {
                padding: 0 8px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        padding: 16px;
        .modalContent{
            border-bottom: none;
            grid-template-columns: 1fr 2fr;
            & > div:first-child {
                display: block;
            }
            & > div:nth-child(2) {
                padding: 0 4px;
                h3 {
                    font-size: 20px;
                }
            }
            & > div:nth-child(3) {
                table {
                    border-collapse: collapse;
                    td {
                        padding: 16px;
                    }
                    tr {
                        border-bottom: 1px solid #ddd;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 400px) {
        .modalHeader {
            margin-top: 36px;
        }
        .modalContent{
            grid-template-columns: 1fr;
            & > div:first-child {
                display: block;
                max-width: 60%;
                max-height: 300px;
                margin: auto;
            }
            & > div:nth-child(2) {
                padding: 0 4px;
                h3 {
                    font-size: 20px;
                }
            }
            & > div:nth-child(3) {
                grid-column: unset;
                table {
                    td {
                        padding: 8px 0;
                    }
                }
            }
        }
    }
`
