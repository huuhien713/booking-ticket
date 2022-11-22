import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchAllCumRap, fetchAllRap } from '../../../services/slice/movieSlice';

const SearchTheater = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllCumRap());
        dispatch(fetchAllRap('BHDStar'));
    }, []);

    const { allCumRap, allRap } = useSelector(state => state.movieSlice);

    const handleShow = (cumRap) => {
        dispatch(fetchAllRap(cumRap));
    }

    return (
        <Wrapper>
            <h3>Danh Sách Các Rạp Hiện Tại</h3>
            <Logo>
                {allCumRap.map((cumRap, index) => {
                    return (
                        <div key={index} onClick={() => { handleShow(cumRap.maHeThongRap) }}>
                            <img src={cumRap.logo} alt="" />
                        </div>
                    )
                })}
            </Logo>
            <ListRap>
                {
                    allRap.map((rap, index) => {
                        return (
                            <div key={index}>
                                <h4>{rap.tenCumRap}</h4>
                                <span>{rap.diaChi}</span>
                            </div>
                        )
                    })
                }
            </ListRap>
        </Wrapper>
    )
}

export default memo(SearchTheater);

const Wrapper = styled.div`
    h3 {
        text-align: center;
        padding: 8px;
        color: var(--HoverTextColor);
    }
`

const ListRap = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    
    div {
        margin: 0 -24px;
        padding: 12px 24px;
        border-bottom: 1px solid #e3ebf6;
        cursor: pointer;
        transition: all 0.5s;
        h4 {
            line-height: 1.5;
            margin-bottom: 4px;
        }
        span {
            font-size: 0.75rem;
            color: #aaa;
        }
        &:hover {
            background-color: var(--HoverTextColor);
            h4, span {
                color: #fff;
            }
        }
    }
`

const Logo = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4px;
    padding: 16px 0;

    & > div {
        width: 100%;
        &:hover img {
            border: 1px solid var(--HoverTextColor);
        }
    }
    img {
        display: block;
        width: 100%;
        margin: auto;
        border-radius: 10px;
        box-shadow: var(--BoxShadow);
    }
`