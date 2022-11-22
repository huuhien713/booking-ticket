import React from 'react';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <Wrapper>
        <div>
            <CiSearch className='search' />
            <input placeholder='Tìm kiếm phim ...' />
        </div>
    </Wrapper>
  )
}

export default Search;

const Wrapper = styled.div`
    position: relative;  
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 4px;
    transtion: all 0.5s ease-in;
   

    div { 
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
`