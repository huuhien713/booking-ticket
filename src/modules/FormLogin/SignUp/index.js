import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Button from '../../../components/Button';
import { clearError, setIsSignUp, signUp } from '../../../services/slice/authSlice';

const SignUp = () => {
    const { isSignUp, messageError } = useSelector(state => state.authSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            "taiKhoan": "",
            "matKhau": "",
            "email": "",
            "soDt": "",
            "hoTen": ""
        },
        mode: 'all',
    })

    const { errors } = formState;

    useEffect(() => {
        if (isSignUp) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Đăng ký thành công',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                navigate('/');
                dispatch(setIsSignUp());
            }, 1000)
        } else if (messageError) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                text: 'Đăng ký không thành công',
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(clearError());
        }
    }, [isSignUp, messageError, dispatch, navigate])

    const onSubmit = (values) => {
        dispatch(signUp(values));
    }

    return (
        <>
            <h2>Đăng Ký</h2>
            <FormSignUp className='formLogin' onSubmit={handleSubmit(onSubmit)}>
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
                        <input type="" {...register('soDt', {
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
                    <Button>Tạo Tài Khoản</Button>
                    <div>Đã có tài khoản ? <Link to='/signup/signin'>Đăng nhập ngay !</Link></div>
                </div>
            </FormSignUp>
        </>
    )
}

export default SignUp;

const FormSignUp = styled.form`
    & > div:first-child {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        p {
            margin-top: 8px;
        }
    }

    div:last-child {
        text-align: center;
        div {
            color: #95aac9;
            margin: 12px 0;
        }
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