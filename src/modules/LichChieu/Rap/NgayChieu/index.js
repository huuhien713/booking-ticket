import React from 'react'
import styled from 'styled-components';
import { changeDate, changeDay } from '../../../../utils';

const NgayChieu = () => {

    const toDay = new Date();
    
    return (
        <Wrapper>
            <ul>
                <li>
                    <h4>{toDay.getDate()}</h4>
                    <p>Hôm nay</p>
                </li>
                <li>
                    <h4>{toDay.getDate() + 1}</h4>
                    <p>{changeDay(changeDate(toDay.getDay() + 1))}</p>
                </li>
                <li>
                    <h4>{toDay.getDate() + 2}</h4>
                    <p>{changeDay(changeDate(toDay.getDay() + 2))}</p>
                </li>
                <li>
                    <h4>{toDay.getDate() + 3}</h4>
                    <p>{changeDay(changeDate(toDay.getDay() + 3))}</p>
                </li>
                <li>
                    <h4>{toDay.getDate() + 4}</h4>
                    <p>{changeDay(changeDate(toDay.getDay() + 4))}</p>
                </li>
                <li>
                    <h4>{toDay.getDate() + 5}</h4>
                    <p>{changeDay(changeDate(toDay.getDay() + 5))}</p>
                </li>
                <li>
                    <h4>{toDay.getDate() + 6}</h4>
                    <p>{changeDay(changeDate(toDay.getDay() + 5))}</p>
                </li>
            </ul>
        </Wrapper>
    )
}

export default (NgayChieu);

const Wrapper = styled.div`
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid var(--BorderColor);
    ul {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
        padding: 16px 8px;
        
        li {
            display: block;
            text-align: center;
            border-radius: 8px;
            box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);
            
            &:first-child {
                h4 {
                    color: #fff;
                    background-color: var(--HoverTextColor);
                }
            }

            overflow: hidden;
            transition: all 0.5s;

            h4 {
                padding: 12px 0;
                background-color: var(--BgContent);
            }

            p {
                padding: 4px 0;
                font-size: 0.8rem;
                text-transform: capitalize;
                border: 1px solid var(--BorderColor);
            }

            &:hover {
                box-shadow: var(--BoxShadow);
                h4 {
                    color: #fff;
                    background-color: var(--HoverTextColor);
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        ul {
            grid-template-columns: repeat(7, 1fr);
        }
        
    }
`