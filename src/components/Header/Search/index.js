import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByName } from '../../../services/slice/movieSlice';
import { Link } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const { searchFilm } = useSelector(state => state.movieSlice);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const SeachRef = useRef();
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    useEffect(() => {
        document.addEventListener('change', handleChange);
        return () => {
            document.removeEventListener('change', handleChange);
        }
    }, [search])

    const handleSubmit = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            dispatch(getMovieByName(e.target.value));
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const handleClick = (e) => {
        if (e.target !== SeachRef.current) {
            setShow(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [show])
    
    return (
        <Wrapper ref={SeachRef}>
            <div 
                >
                <CiSearch 
                    className='search' 
                />
                <input
                    value={search}
                    onClick={(e) => handleClick(e)}
                    onKeyDown={(e) => { handleSubmit(e) }}
                    onChange={(e) => { handleChange(e)} }
                    placeholder='Tìm kiếm phim ...'
                />
            </div>
            {
                show ? 
                 
                (<div className='resultSearch' >
                    <ul>
                        {searchFilm.length === 0 && <li>không tìm thấy phim</li>}
                        {searchFilm?.map((item, index) => (
                            <li key={index} onClick={() => {setShow(false)}}>
                                <Link to={`/phim/${item.maPhim}`}>
                                    {item.tenPhim}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>) : ''
            }
        </Wrapper>
    )
}

export default Search;

const Wrapper = styled.div`
    position: relative;  
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 4px;
    transition: all 0.5s ease-in;

    & > div:first-child { 
        display: flex;
        align-items: center;
        justify-content: flex-start;
        transition: all 0.5s;
        &:hover {
            cursor: pointer;
            color: var(--HoverTextColor);
        }
        
        .search {
            position: absolute;
            font-size: 1.5rem;
            font-weight: bold;
            transform: translate(4px, 0px);
            pointer-events: none;
        }
        
        input {
            
            
            &:focus{
                width: 200px;
                border: 1px solid var(--BorderColor);
                border-radius: 20px;
                transition: all 0.5s;
            }
            width: 0px;
            border: none;
            outline: none;
            padding: 8px 8px 8px 32px;
            background-color: transparent;
        }
    }
    .resultSearch{ 
        position: absolute;
        top: 100%;
        right: 10px;
        width: 200px;
        z-index: 100;
        font-size: 14px;
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--BgColor);
        ul {
            max-height: 50vh;
            li {
                cursor: pointer;
                line-height: 20px;
                border-bottom: 1px solid var(--BorderColor);
                user-select: none;
                a {
                    width: 100%;
                    display: block;
                    padding: 8px 16px;
                }
            }
        }
    }
`