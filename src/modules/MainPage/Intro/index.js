import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import {VscMute, VscUnmute} from 'react-icons/vsc'
import { ThemeContext } from '../../../templates/ThemeContext';

const Intro = () => {
  const [ isMuted, setIsMuted] = useState(true)
  const themeContext = useContext(ThemeContext);
  return (
    <ContainerIntro className={themeContext.theme}>
      <ReactPlayer 
        className='videoIntro' 
        playing={false} 
        width='100%' 
        height='100%' 
        volume={1} 
        muted={isMuted}
        loop={true}
        url='https://www.youtube.com/watch?v=9gHpGQA7rIE' />
      <InfoIntro>
        <h1>Avatar 2</h1>
        <p>Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.</p>
      </InfoIntro>
      {
        isMuted ? (
          <VscMute className='btnVolume' onClick={() => {setIsMuted(!isMuted)}} />
        ) : (
          <VscUnmute className='btnVolume' onClick={() => {setIsMuted(!isMuted)}} />
        )
      }
      
    </ContainerIntro>
  )
}

export default Intro;

const ContainerIntro = styled.div`
  position: relative;
  color: #fff;
  padding-top: 50%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .btnVolume {
    position: absolute;
    top: 45%;
    right: 15%;
    transform: translata(-45%, -15%) scale(1);
    width: 40px;
    height: 40px;
    padding: 5px;
    color: #bbb;
    border: 1px solid #bbb;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.5s;
    &:hover {
      opacity: 1;
      color: #fff;
      border: 1px solid #fff;  
      transform: scale(1.2);
      background-color: rgba(255,255,255,0.4);
    }

    @media screen and (max-width: 912px) {
      width: 35px;
      height: 35px;
    }
  
    @media screen and (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  
    @media screen and (max-width: 575px) {
      width: 20px;
      height: 20px;
    }
  }
`

const InfoIntro = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  transform: translata(-30%, -5%);

  @media screen and (max-width: 912px) {
    left: 25px;
  }

  @media screen and (max-width: 768px) {
    left: 15px;
  }

  @media screen and (max-width: 575px) {
    display: none;
  }

  h1 {
    font-size: 50px;
    line-height: 1;
    transition: all 0.5s ease;

    @media screen and (max-width: 912px) {
      font-size: 40px;
    }

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }

  }
  p {
    max-width: 500px;
    width: 100%;
    line-height: 1.5;
    padding-top: 15px;
    font-size: 1rem;

    @media screen and (max-width: 912px) {
      font-size: 0.875rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`
