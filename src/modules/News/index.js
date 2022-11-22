import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../templates/ThemeContext';
import { randomReview } from '../../utils'
import Updated from './Updated';
import Review from './Review';
import ButtonShow from './ButtonShow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNews } from '../../services/slice/newsSlice';

const News = () => {
  const themeContext = useContext(ThemeContext);

  const dispatch = useDispatch();

  const news = useSelector((state) => state.newsSlice.newsList);

  const [isShow, setIsShow] = useState(false);

  const newArr = randomReview(news);

  const handleShow = () => {
    setIsShow(!isShow);
  }

 
  
  useEffect(() => {
    dispatch(fetchAllNews())
  }, []);

  useEffect(() => {
  }, [isShow])
  
  return (
    <Container className={themeContext.theme}>
      <WrapperContent>
        <div>
          <div className='title'>mới cập nhật</div>
          <div style={ isShow ? {height: '100%', overflow: 'visible'} : {height: '840px', overflow: 'hidden'} } className='content'>
            {news.map((item, index) => {
              return (
                <Updated key={index} item={item} />
              )
            })}
          </div>
        </div>
        <div>
          <div className='title'>review</div>
          <div className='content'>
            {newArr.slice(0, 5).map((item, index) => {
              return (
                <Review key={index} item={item} />
              )
            })}
          </div>
        </div>
      </WrapperContent>
      <ButtonShow isShow={isShow} handleShow={handleShow} />
    </Container>
  )
}

export default News;

const Container = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
`

const WrapperContent = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  transition: all 1s;


  & > div {
    border-radius: 8px;
    box-shadow: var(--BoxShadow);
    &:last-child {
      height: fit-content;
    }
  }

  .title {
    color: var(--TextColor);
    padding: 16px 24px;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
    background-color: var(--BgContent);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .content {
    padding: 16px 24px;
    transition: all 1s;
    div:last-child {
      border-bottom: none;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    .title, .content {
      padding 16px
    }
    .title {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`

