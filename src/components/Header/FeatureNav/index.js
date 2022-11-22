import React from 'react';
import styled from 'styled-components';

import Toggle from '../Toggle';
import User from '../User';
import Search from '../Search';
import Location from '../Location';

const FeatureNav = () => {
    return (
        <Feature>
            <div>
                <Location />
                <Search />
            </div>
            <div>
                <Toggle />
                <User />
            </div>
        </Feature>
    )
}

export default FeatureNav;

const Feature = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: flex-end;    

    & > div {
        display: flex;
        justify-content: unset;
        align-items: center;
    }

    @media screen and (max-width: 575px) {
        & > div:first-child {
            display: none;
        }
    }
`