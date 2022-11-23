import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchHeThongRap } from '../../../services/slice/movieSlice';
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingContent from '../../../components/Loading/LoadingContent';
import LazyLoad from 'react-lazyload';

const HeThongRap = () => {

    const dispatch = useDispatch()
    const { allHeThongRapChieu } = useSelector(state => state.movieSlice);

    return (
        <>
            <Wrapper>
                {allHeThongRapChieu.map((heThongRap, index) => (
                    <LazyLoad key={index} placeholder={<LoadingContent />}>
                        <div onClick={() => { dispatch(fetchHeThongRap(heThongRap.maHeThongRap)) }}>
                            <img src={heThongRap.logo} alt="" />
                            <p>{heThongRap.tenHeThongRap}</p>
                        </div>
                    </LazyLoad>
                ))}
            </Wrapper>
        </>
    )
}

export default HeThongRap;

const Wrapper = styled.div`
    padding: 12px 16px;
    display: flex;  
    border-bottom: 1px solid var(--BorderColor);    
    user-select: none;

    div {
        width: 80px;
        text-align: center;
        
        img {
            width: 50px;
            border-radius: 10px;
            box-shadow: var(--BoxShadow);
            transition: all 0.5s;
            background-color: var(--BgContent);
        }
        p {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 8px;
            text-transform: capitalize;
            color: var(--TextContent);
            transition: all 0.5s;
        }

        &:hover {
            img {
                border: 1px solid var(--HoverTextColor);
            }
            p {
                color: var(--HoverTextColor);
            }
        }
    }
    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        div {
            margin: auto;
        }
    }
    @media screen and (max-width: 576px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 300px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`