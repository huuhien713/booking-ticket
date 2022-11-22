import React from 'react';
import styled from 'styled-components';
import { SlLocationPin } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { show } from '../../../services/slice/authSlice';


const Location = () => {
  const dispatch = useDispatch();

  const handleOpenLocation = () => {
    dispatch(show());
  }
  return (
    <Wrapper onClick={handleOpenLocation}>
      <SlLocationPin />
    </Wrapper>
  )
}

export default Location;

const Wrapper = styled.div`
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 4px;
    margin: 0 10px;
    transition: all 0.5s;
    &:hover {
        cursor: pointer;
        color: var(--HoverTextColor);
    }
    svg {
      transform: translateY(2px);
    }
`

