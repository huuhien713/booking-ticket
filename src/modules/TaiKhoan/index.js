import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import Button from '../../components/Button';
import LoadingContent from '../../components/Loading/LoadingContent';
import { capNhatThongTinNguoiDung, lichSuDatVeTaiKhoan } from '../../services/slice/bookTicketSlice';
import { ThemeContext } from '../../templates/ThemeContext';

const TaiKhoan = () => {
    const themeContext = useContext(ThemeContext);
    const dispatch = useDispatch();

    const { taiKhoan, isLoading } = useSelector(state => state.bookTicketSlice);

    const { register, handleSubmit, formState, reset } = useForm({
        defaultValues: taiKhoan,
        mode: 'all',
    });

    useEffect(() => {
        dispatch(lichSuDatVeTaiKhoan());
    }, [])

    useEffect(() => {
        if (taiKhoan) reset(taiKhoan);
    }, [taiKhoan])

    const [isShowBookTicketHistory, setIsShowBookTicketHistory] = useState(false);

    const { errors } = formState;

    const onSubmit = (values) => {
        // console.log(values)
        dispatch(capNhatThongTinNguoiDung(values));
    }

    if (isLoading) {
        return (<div style={{ height: '100vh', transform: 'translateY(50%)' }}>
            <LoadingContent />
        </div>)
    }

    return (
        <Wrapper className={themeContext.theme}>
            <div>
                <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="" />
                <div>
                    <h3>{taiKhoan?.hoTen}</h3>
                    <p>{taiKhoan?.email}</p>
                    <p>{taiKhoan?.soDT}</p>
                </div>
            </div>
            <div>
                <Tab>
                    <div>
                        <strong
                            style={(isShowBookTicketHistory ? {} : { color: 'var(--HoverTextColor)' })}
                            onClick={() => setIsShowBookTicketHistory(!isShowBookTicketHistory)}
                        >THÔNG TIN CÁ NHÂN</strong>
                        <strong
                            style={(isShowBookTicketHistory ? { color: 'var(--HoverTextColor)' } : {})}
                            onClick={() => setIsShowBookTicketHistory(!isShowBookTicketHistory)}
                        >LỊCH SỬ ĐẶT VÉ</strong>
                    </div>

                    {isShowBookTicketHistory && taiKhoan
                        ?
                        (<HistoryBooking>
                            <table>
                                <thead>
                                    <tr>
                                        <td>STT</td>
                                        <td>Tên phim</td>
                                        {/* <td>Thời Lượng</td> */}
                                        <td>Số ghế</td>
                                        <td>Rạp phim</td>
                                        <td>Địa chỉ</td>
                                        <td>Giá vé</td>
                                        <td>Tổng tiền</td>
                                        <td>Ngày đặt</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {taiKhoan?.thongTinDatVe?.map((ve, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{ve.tenPhim}</td>
                                            {/* <td>{ve.thoiLuongPhim}</td> */}
                                            <td>{ve.danhSachGhe.reduce((results, item, index) => (results += item.tenGhe + ', '), '')}</td>
                                            <td>{ve.danhSachGhe.reduce((results, item, index) => (results = item.tenRap), '')}</td>
                                            <td>{ve.danhSachGhe.reduce((results, item, index) => (results = item.tenHeThongRap), '')}</td>
                                            <td>{ve.giaVe.toLocaleString()}</td>
                                            <td>{(ve.giaVe * ve.danhSachGhe.length).toLocaleString()}</td>
                                            <td>
                                                <p>{ve.ngayDat.slice(0, 10)}</p>
                                                <p>{ve.ngayDat.slice(11, 16)}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </HistoryBooking>)
                        :
                        (<FormSignUp className='formLogin' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <FormInput>
                                    <label>Tài khoản</label>
                                    <input type="text" {...register('taiKhoan', {
                                        required: {
                                            value: true,
                                            message: 'Tài khoản không được bỏ trống'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'Tài khoản phải từ 8 - 16 kí tự'
                                        },
                                        maxLength: {
                                            value: 16,
                                            message: 'Tài khoản phải từ 8 - 16 kí tự'
                                        }
                                    })} />
                                    {errors.taiKhoan && (<p>{errors.taiKhoan.message}</p>)}
                                </FormInput>

                                <FormInput>
                                    <label>Mật khẩu</label>
                                    <input type="password" {...register('matKhau', {
                                        required: {
                                            value: true,
                                            message: 'Mật khẩu không được bỏ trống'
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: 'Mật khẩu phải tối thiểu 8 ký tự ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt'
                                        }
                                    })} />
                                    {errors.matKhau && (<p>{errors.matKhau.message}</p>)}
                                </FormInput>

                                <FormInput>
                                    <label>Email</label>
                                    <input type="text" {...register('email', {
                                        required: {
                                            value: true,
                                            message: 'Email không được bỏ trống'
                                        },
                                        pattern: {
                                            value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: 'Email không đúng định dạng'
                                        }
                                    })} />
                                    {errors.email && (<p>{errors.email.message}</p>)}
                                </FormInput>

                                <FormInput>
                                    <label>Số điện thoại</label>
                                    <input type="" {...register('soDT', {
                                        required: {
                                            value: true,
                                            message: 'Số điện thoại không được bỏ trống'
                                        },
                                        pattern: {
                                            value: /[0-9]{10,16}/,
                                            message: 'Số điện thoại phải là số, từ 10 - 16 kí số'
                                        }
                                    })} />
                                    {errors.soDt && (<p>{errors.soDt.message}</p>)}
                                </FormInput>

                                <FormInput>
                                    <label>Họ tên</label>
                                    <input type="text" {...register('hoTen', {
                                        required: {
                                            value: true,
                                            message: 'Họ tên không được bỏ trống'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'Họ tên phải từ 5 - 16 kí tự'
                                        },
                                        maxLength: {
                                            value: 16,
                                            message: 'Họ tên phải từ 5 - 16 kí tự'
                                        }
                                    })} />
                                    {errors.hoTen && (<p>{errors.hoTen.message}</p>)}
                                </FormInput>
                            </div>
                            <div>
                                <Button>Cập Nhật</Button>
                            </div>
                        </FormSignUp>)
                    }
                </Tab>
            </div>
        </Wrapper>
    )
}

export default TaiKhoan;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 32px;
    padding: 36px;
    overflow: hidden;

    & > div:first-child {
        img {
            width: 100%;
            height: auto;
            border-radius: 100%;
        }
        div {
            margin-top: 20px;
            padding: 24px 12px;
            border: 1px solid var(--BorderColor);
            border-radius: 8px;
            background-color: var(--BgContent);
            h3, p {
                margin-bottom: 16px;
            }
        }
    }
    @media screen and (max-width: 912px) {
        grid-template-columns: 1fr;
        gap: 32px 0;
        & > div:first-child {
            width: 50%;
            margin: auto;
        }
    }
    @media screen and (max-width: 576px) {
        padding: 24px;
        & > div:first-child {
            width: 90%;
        }
    }
    @media screen and (max-width: 400px) {
        padding: 12px;
        gap: 12px;
        & > div:first-child {
            margin: auto;
        }
    }

`
const Tab = styled.div`
    & > div:first-child {
        margin: 0 0 36px 24px;
        strong {
            display: inline-block;
            font-size: 20px;
            padding: 16px 24px 16px 0;
            transition: all 0.5s;
            &::after {
                content: '';
                display: block;
                margin-top: 12px;
                width: 0;
                height: 2px;
                transition: all 0.5s;
                background-color: transparent;
            }
            &:hover::after{
                width: 100%;
                background-color: var(--HoverTextColor);
            }
        }
    }
    @media screen and (max-width: 912px){
        & > div:first-child {
            margin: 0 auto 24px;
            text-align: center;
        }
    }
    @media screen and (max-width: 576px) {
        & > div:first-child {
            margin: auto;
            strong {
                padding: 8px;
                font-size: 16px;
            }
        }
    }
`
const HistoryBooking = styled.div`
    table {
        width: 100%;
        border-collapse: collapse;
        td {
            max-width: 200px;
            padding: 8px;
            border: 1px solid var(--BorderColor);
        }
    }
    @media screen and (max-width: 500px) {
        margin: auto;
        width: 350px;
        overflow: scroll;
    }
`

const FormSignUp = styled.form`
    width: 50%;
    margin-left: 36px;
    & > div:first-child {
        display: grid;
        grid-template-columns: (1fr);
        gap: 16px;
        p {
            margin-top: 8px;
        }
    }

    & > div:last-child {
        width: 100px;
        text-align: center;
        button {
            padding: 0;
        }
        div {
            color: #95aac9;
            margin: 12px 0;
        }
    }
    @media screen and (max-width: 912px){
        width: 100%;
        margin: 0;
    }

    @media screen and (max-width: 500px) {
        & > div:first-child {
            grid-template-columns: repeat(1, 1fr);
            div {
                margin: 0;
                p {
                    margin-bottom: 4px;
                }
            }
        }
    }
`
const FormInput = styled.div`
    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.8rem;
        margin-bottom: 8px;
        font-weight: 500;
        span {
            color: #95aac9;
        }
    }
    input{
        width: 100%;
        line-height: 2;
        border: 1px solid #d2ddec;
        border-radius: 8px;
        padding: 8px 12px;
    }
    p {
        color: red;
        margin-top: 12px;
    }
`