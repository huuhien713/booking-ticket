import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AiTwotoneStar } from 'react-icons/ai'
import { fetchAllCumRap, fetchAllRap } from '../../services/slice/movieSlice';
import { ThemeContext } from '../../templates/ThemeContext';

const TheaterList = () => {
    const themeContext = useContext(ThemeContext)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCumRap());
    }, []);

    const { allCumRap } = useSelector(state => state.movieSlice);

    
    return (
        <div className={themeContext.theme}>
            <Wrapper>
                <Title>
                    <h2>Hệ thống rạp chiếu phim</h2>
                    <p>Danh sách hệ thống rạp chiếu phim lớn có mặt khắp cả nước</p>
                </Title>
                <ListCumRap>
                    {
                        allCumRap.map((cumRap, index) => (
                            <div key={index} onClick={() => {
                                navigate(`/rap/${cumRap.maHeThongRap}`);
                                dispatch(fetchAllRap(cumRap.maHeThongRap));
                            }}>
                                <Logo>
                                    <img src={cumRap.logo} alt="" />
                                </Logo>
                                <Info>
                                    <h3>{cumRap.tenHeThongRap}</h3>
                                    <p>Hệ thống rạp chiếu phim hiện đại</p>
                                    <div>
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <span>{Math.floor(Math.random()*1000)} đánh giá</span>
                                    </div>

                                </Info>
                            </div>
                        ))
                    }
                </ListCumRap>
            </Wrapper>
        </div>
    )
}

export default TheaterList;

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    padding: 36px;
    @media screen and (max-width: 576px) {
        width: 90%;
        padding: 16px 0;
    }
`

const Title = styled.div`
    text-align: center;
    h2 {
        color: var(--HoverTextColor);
        margin-bottom: 12px;
        font-size: 24px;
    }
    p {
        color: var(--TextColor);
    }

    @media screen and (max-width: 576px) {
        h2 {
            font-size: 20px;
        }
        p{
            font-size: 12px;
        }
    }
`

const ListCumRap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 24px 0;

    & > div {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        border-radius: 8px;
        transition: all 0.5s;
        border: 1px solid rgba(229,229,229, 1);
        background-color: var(--BgContent);
        
        &:hover {
            cursor: pointer;
            box-shadow: 4px 4px 5px rgba(0,0,0, 0.3);
            background-color: var(--HoverBgColor);
        }
    }
    @media screen and (max-width: 912px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Logo = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 24px;
    img {
        display: block;
        width: 100%;
    }
`

const Info = styled.div`
    h3 {
        text-transform: uppercase;
        margin-bottom: 8px;
    }
    p {
        color: var(--TextColor);
        margin-bottom: 8px;
    }
    div {
        svg {
            color: #FCD34D;
            vertical-align: bottom;
        }
        span {
            color: #aaa;
            margin-left: 8px;
        }
    }
    @media screen and (max-width: 576px) {
        h3 {
            font-size: 16px;
        }
        p {
            font-size: 12px;
        }
    }
`