import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InfoCompany = () => {
    return (
        <Wrapper>
            <div>
                <h3>CÔNG TY TNHH MONET</h3>
                <p>
                    Số ĐKKD: 0315367026 · Nơi cấp: Sở kế hoạch và đầu tư Tp. Hồ Chí Minh · Đăng ký lần đầu ngày 01/11/2018
                </p>
                <br />
                <p>
                    Địa chỉ: 33 Nguyễn Trung Trực, P.5, Q. Bình Thạnh, Tp. Hồ Chí Minh
                </p>
                <br />
                <p><Link>Về chúng tôi</Link> · <Link>Chính sách & Thỏa thuận</Link></p>
                <p><Link>Hỗ trợ</Link> · <a href="tel:+84389845161">Liên hệ</a></p>
            </div>
        </Wrapper>
    )
}

export default InfoCompany;

const Wrapper = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;

    h3 {
        line-height: 2;
        margin-bottom: 8px;
    }

    p {
        line-height: 1.5;
        a {
            color: #6c757d;
            font-weight: 500;
            transition: all 0.5s;
            &:hover {
                color: #0d6efd;
            }
        }
    }
`