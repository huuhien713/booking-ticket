import { FiUser } from 'react-icons/fi';
import styled from 'styled-components';
import { loginShow, logout } from '../../../services/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const User = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dropdown = useRef();

  const { user } = useSelector(state => state.authSlice);

  const dispatch = useDispatch();

  const handleOpenLogIn = () => {
    dispatch(loginShow());
  }

  const handleClick = () => {
    setShow(!show);
  }

  useEffect(() => {
    if (show) {
      dropdown.current.style.visibility = 'visible';
    } else {
      dropdown.current.style.visibility = 'hidden';
    }
  }, [show])

  return (
    <Wrapper>
      {user === null ?
        <FiUser onClick={handleOpenLogIn} /> : (
          <div onClick={handleClick}>
            <img src="https://moveek.com/bundles/ornweb/img/no-avatar.png" alt='' />
          </div>
        )
      }
      <DropMenuUser ref={dropdown}>
        <ul>
          <li onClick={() => {navigate('/taikhoan'); setShow(!show)}}>trang cá nhân</li>
          {/* <hr /> */}
          {/* <li>lịch sử mua vé</li>
          <li>phim yêu thích</li> */}
          {/* <hr /> */}
          <li onClick={() => {
            dispatch(logout());
            setShow(!show);
          }}>đăng xuất</li>
        </ul>
      </DropMenuUser>
    </Wrapper>
  )
}

export default User;

const Wrapper = styled.div`
  position: relative;
  font-size: 1.2rem;
  padding: 8px;
  margin: 0 10px;
  border-radius: 4px;
  transition: all 0.5s;

  &:hover svg {
      cursor: pointer;
      color: var(--HoverTextColor);
  }

  div:first-child {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
    
    img {
      width: 100%;
    }
  }
`

const DropMenuUser = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 8px 0;
  min-width: 180px;
  border: 1px solid #edf2f9;
  border-radius: 8px;
  background-color: #fff;
  z-index: 20;
  transition: all 0.5s;
  visibility: hidden;

  ul {
    color: #6e84a3;
    text-transform: capitalize;
    hr {
      margin: 12px 0;
      border-top: 1px solid #edf2f9;
    }
    li {
      font-size: 16px;
      padding: 6px 24px;
      &:hover {
        cursor: pointer;
        font-weight: 500;
      }
    }
  }
`