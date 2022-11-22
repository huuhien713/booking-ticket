import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../../../../hooks';
import MovieItem from '../MovieItem';

const MovieList = ({ slider, arrFilm }) => {

    const [screenWidth] = useViewport();

    return (
        <List
            style={
                arrFilm && arrFilm.length > 0
                    ? {
                        gridTemplateColumns: `repeat(${arrFilm.length},
                  ${screenWidth > 1920 ? '300px' :
                                screenWidth > 1200 ? `${screenWidth / 6}px` :
                                    screenWidth > 992 ? `${screenWidth / 5}px` :
                                        screenWidth > 768 ? `${screenWidth / 4}px` :
                                            screenWidth > 575 ? `${screenWidth / 3}px` : `${screenWidth / 2}px`})`
                    } : {}
            }
            className='movieList' ref={slider}>
            {arrFilm?.map((film, index) =>
                <MovieItem key={index} film={film} />
            )}
        </List>
    )
}

export default MovieList;

const List = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    gap: 8px;
    transition: all 0.3s;
    overflow: hidden;
    overflow-y: hidden;
    overflow-x: auto;
    user-select: none;
    padding: 24px 0;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`