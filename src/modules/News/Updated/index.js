import React from 'react'
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import LoadingContent from '../../../components/Loading/LoadingContent';

const Updated = ({ item }) => {
  return (
    <Container>
      <div>
        <LazyLoad
          once={true}
          height={100}
          offset={[-100, 100]}
          placeholder={<LoadingContent />}
        >
          <img src={item.image} alt="" />
        </LazyLoad>
      </div>
      <div>
        <h3>{item.title}</h3>
        <p><span>{item.source}</span> - <span>{item.author}</span></p>
        <p>{item.content}</p>
      </div>
    </Container>
  )
}

export default Updated;

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
      width: 100%;
      height: 100%;
      border-radius: 8px;
      cursor: pointer;
    }
    h3 {
      margin-bottom: 6px;
      cursor: pointer;
    }
    p:first-of-type {
      color: red;
      span {
        cursor: pointer;
      }
    }
    p:last-of-type {
      color: var(--TextContent);
      margin-top: 6px;
    }
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
    div {
      p:last-of-type {
        display: none;
      }
    }
  }
`

