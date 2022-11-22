import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPlayCircle } from 'react-icons/bs'
import Button from '../../../../components/Button';
import { useDispatch } from 'react-redux';
import { trailer, showTrailer } from '../../../../services/slice/movieSlice';
import LazyLoad from 'react-lazyload';
import LoadingContent from '../../../../components/Loading/LoadingContent';

const MovieItem = ({ film }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(film);
  return (
    <LazyLoad
        once={true}
        height={300}
        offset={-100}
        placeholder={<LoadingContent />}
      >
      <Item >
        <img src={film.hinhAnh} alt="" />
        <Link onClick={() => { dispatch(trailer(film.trailer)); dispatch(showTrailer()) }}>
          <BsPlayCircle />
        </Link>
        <Button onClick={() => { navigate(`/phim/${film.maPhim}`) }}>Xem Chi Tiết</Button>
      </Item>
      </LazyLoad>
  )
}

export default MovieItem;

const Item = styled.div`
  position: relative;
  max-width: 300px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transform: scale(1);
  transition: all 0.3s linear;
  user-select: none;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
  } 
  
  a {
    display: block;
    position: absolute;
    font-size: 64px;
    top: 45%;
    left: 50%;
    transition: all 0.5s;
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0;
    cursor: pointer;
    color: #fff;
    z-index: 10;
    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  button {
    position: absolute;
    width: 80%;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 20;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 10;
  } 

  &:hover::after {
    background-color: transparent;
  } 

  &:hover {
    button {
      bottom: 25px;
    }
    a {
      opacity: 1;
    }
  }
`