import styled from 'styled-components';
import { ThemeContext } from '../../../templates/ThemeContext';
import React, { useContext } from 'react'
import MovieSlider from './MovieSlider';

const Showing = ( {nameList, arrFilm, background} ) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container className={themeContext.theme}>
      <Title>
        <strong>{nameList}</strong>
      </Title>
      <MovieSlider arrFilm={arrFilm}/>
    </Container>
  )
}

export default (Showing);

const Container = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 48px;
`

const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 24px;
  strong {
    color: var(--HoverTextColor);
    font-size: 32px;
    margin: 0 8px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 10px;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid var(--HoverTextColor);
    }
  }

  @media screen and (max-width: 575px) {
    font-size: 1rem;
    margin-bottom: 12px;
    strong {
      margin: 0 5px;
    }
  }
`



