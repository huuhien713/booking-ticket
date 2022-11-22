import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import LoadingContent from '../../../components/Loading/LoadingContent';

const Review = ({ item }) => {
  return (
    <Container>
      <div>
        <LazyLoad
          once={true}
          height={100}
          offset={[-100, 100]}
          scroll={true}
          placeholder={<LoadingContent />}
        >
          <img src={item.image} alt="" />
        </LazyLoad>
      </div>
      <div>
        <h3>{`${item.title.slice(0, 40)} . . .`}</h3>
        <p><span>{item.author}</span></p>
      </div>
    </Container>
  )
}

export default Review;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #eee;
  margin-top: 16px;
  div {
    padding: 0 12px 16px;
    font-size: 0.8rem;
    img {
      display: block;
      width: auto;
      height: 64px;
      margin: auto;
      border-radius: 8px;
      object-fit: cover;
      cursor: pointer;
    }
    h3 {
      margin-bottom: 6px;
      cursor: pointer;
    }
    p {
      color: red;
      span {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`

