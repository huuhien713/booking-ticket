import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const UseProtected = ({children}) => {
    const {user} = useSelector(state => state.authSlice);

    // lấy url hiện tại của user lưu trên url
    const location = useLocation();
    // console.log(location.pathname);
    if (!user) {
        // phần sau dấu ?  ko ảnh hưởng tới đướng dẫn trang
        const url = `/signup/signin?redirectUrl=${location.pathname}`
        return <Navigate to={url} replace />
    }

    return children;
}

export default memo(UseProtected)