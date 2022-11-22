import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const dataImg = [
    { id: 1, img: './images/slide1.jpg' },
    { id: 2, img: './images/slide2.jpg' },
    { id: 3, img: './images/slide3.jpg' },
    { id: 4, img: './images/slide4.jpg' },
    { id: 5, img: './images/slide5.jpg' },
    { id: 6, img: './images/slide6.jpg' },
    { id: 7, img: './images/slide7.jpg' },
    { id: 8, img: './images/slide8.jpg' },
    { id: 9, img: './images/slide9.jpg' },
    { id: 10, img: './images/slide10.jpg' },
    { id: 11, img: './images/slide11.jpg' },
    { id: 12, img: './images/slide12.jpg' },
    { id: 13, img: './images/slide13.jpg' },
    { id: 14, img: './images/slide14.jpg' },
    { id: 15, img: './images/slide15.jpg' },
    { id: 16, img: './images/slide16.jpg' },
]

const PhoneSlider = ({ item }) => {

    const divRef = useRef();
    
    const [slide, setSlide] = useState(0);
    
    useEffect(() => {   
        let scrollLeft = setInterval(() => {
            const maxScrollWidth = divRef.current.scrollWidth - divRef.current.clientWidth;
            if (maxScrollWidth > slide) {
                setSlide(prev => prev + divRef.current.clientWidth);
            } else {
                setSlide(0);
            }
        }, 3000); 
        
        divRef.current.scrollLeft = slide;

        return () => {
            clearInterval(scrollLeft);
        }
    }, [slide])

    return (
        <Phone>
            <div> 
                <img src="./images/mobile.png" alt="" />
                <SliderImg ref={divRef}>
                    {
                        dataImg.map((item, index) => {
                            return (
                                <img key={index} src={item.img} alt={item.id} />
                            )
                        })
                    }
                </SliderImg>
            </div>
        </Phone>
    )
}

export default PhoneSlider;

const Phone = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    position: relative;
    max-width: 300px;
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
  @media screen and (max-width: 500px) {
    width: 50%;
    div {
        border-radius: 20px;
    }
  }
`
const SliderImg = styled.div`
    position: absolute;
    top: 1%;
    left: 2%;
    right: 2%;
    bottom: 1%;
    border: 1px solid black;
    border-radius: 40px;
    overflow: hidden;
    scroll-behavior: smooth;
    transition: all 1s;
    display: flex;
    img {
        display: block; 
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`