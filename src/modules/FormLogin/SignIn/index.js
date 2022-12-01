import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { clearError, loginClose, signIn } from '../../../services/slice/authSlice';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const redirectUrl = searchParams.get('redirectUrl');

    const { user, messageError } = useSelector(state => state.authSlice);

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            "taiKhoan": "",
            "matKhau": ""
        },
        mode: 'all',
    });

    const { errors } = formState;

    useEffect(() => {           
        if (user) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(()=> {
                if (redirectUrl === null) {
                    navigate('/');
                } else {
                    navigate(`${redirectUrl}`);
                }
            }, 1000)
        } else if (messageError) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                text: 'Tài khoản hoặc mật khẩu không đúng',
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(clearError())
        }
    }, [user, messageError, redirectUrl, navigate, dispatch])


    const onSubmit = (values) => {
        dispatch(signIn(values));
    }

    return (
        <>
            <h2>Đăng Nhập</h2>

            <FormSignIn onSubmit={handleSubmit(onSubmit)}>

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
                        minLength: {
                            value: 8,
                            message: 'Mật khẩu phải từ 8 - 16 kí tự'
                        },
                        maxLength: {
                            value: 16,
                            message: 'Mật khẩu phải từ 8 - 16 kí tự'
                        }
                    })} />
                    {errors.matKhau && (<p>{errors.matKhau.message}</p>)}
                </FormInput>
                <Button>Đăng nhập</Button>
                <div>Chưa có tài khoản ? <Link to='/signup' onClick={() => { dispatch(loginClose()) }}>Đăng ký ngay !</Link></div>

            </FormSignIn>
        </>
    )
}

export default SignIn;

const FormSignIn = styled.form`
    padding: 10px;
    div {
        text-align: center;
        div {
            color: #95aac9;
            margin-bottom: 12px;
        }
    }
`

const FormInput = styled.div`
    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 8px;
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
        margin-bottom: 12px;
    }
    p {
        color: red;
        margin-bottom: 12px;
    }
`