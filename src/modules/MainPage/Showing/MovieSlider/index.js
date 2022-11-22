import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri'
import MovieList from '../MovieList';

const MovieSlider = ({ arrFilm }) => {

  const slider = useRef();

  const handleScroll = (state) => {
    // const valueScrollLeftMax = slider.current.scrollWidth - slider.current.clientWidth;
    if (state === 'right') {
      slider.current.scrollLeft += slider.current.clientWidth;
    } else {
      slider.current.scrollLeft -= slider.current.clientWidth;
    }
  };

  return (
    <Slider>
        <MovieList slider={slider} arrFilm={arrFilm} />
      <div className='btnLeft' onClick={() => { handleScroll('left') }}>
        <RiArrowDropLeftLine />
      </div>
      <div className='btnRight' onClick={() => { handleScroll('right') }}>
        <RiArrowDropRightLine />
      </div>
    </Slider>
  )
}

export default MovieSlider;

const Slider = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  background-color: var(--BgContent);


  .btnLeft {
    left: 15px;
  }

  .btnRight {
    right: 15px;
  }

  .btnLeft, .btnRight {
    position: absolute;
    top: 40%;
    transform: scale(1);
    transition: all 0.5s;
    z-index: 20;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    
    svg {
      opacity: 0.8;
      color : #fff;
      font-size: 50px;
      transition: all 0.5s;
    }

    &:hover {
      transform: scale(1.1);
    }
    &:hover svg {
      opacity: 1;
    }
  }
  
  &:hover .movieItem {
    opacity: 1;
  }
`