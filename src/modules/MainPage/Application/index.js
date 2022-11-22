import React from 'react';
import styled from 'styled-components';
import PhoneSlider from './PhoneSlider';

const Application = () => {
    return (
        <Container>
            <div className='overlay'>
                <div className='main'>
                    <Title>
                        <div>
                            <h2>
                                <div>Ứng dụng tiện lợi dành</div>
                                <div>người yêu điện ảnh</div>
                            </h2>
                            <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                            <a href='https://play.google.com/store/apps/details?id=origin.moveek.android&hl=vi&gl=US&pli=1'>
                                cài đặt Moveek App Android
                            </a>
                            <p>Moveek có hai phiên bản IOS và Android</p>
                        </div>
                    </Title>
                    <PhoneSlider />
                </div>
            </div>
        </Container>
    )
}

export default Application;

const Container = styled.div`
  background: url(https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/netflixteaser.png) no-repeat center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: auto;
  color: white;
  z-index: 10;  
  
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.65);
  }

  .main {
    width: 80%;
    margin: auto;
    padding: 64px 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      text-align: center;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: auto;
  padding: 24px;
  h2 {
    font-size: 36px;
  }
  p {
    font-size: 20px;
    padding: 24px 0;
  }
  a {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: var(--TextColor);
    background-color: var(--HoverTextColor);
    opacity: 0.8;
    transition: all 0.5s;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 992px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
      padding: 16px 0;
    }
    a {
      font-size: 1rem;
      padding: 8px 16px;
    }
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
      padding: 16px 0;
    }
    a {
      font-size: 0.8rem;
      padding: 8px 16px;
    }
  }
`