import React, { useEffect } from 'react';
import Intro from './Intro';
import Showing from './Showing';
import News from '../News'
import Application from './Application';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovie } from '../../services/slice/movieSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector(state => state.movieSlice);

  const showing = movieList.filter(item => item.dangChieu)

  useEffect(() => {
    dispatch(fetchAllMovie());
  }, []);

  return (
    <>
      <Intro />
      <Showing arrFilm={showing} nameList={'Now Showing'} />
      <News />
      <Application />
    </>
  )
}

export default MainPage