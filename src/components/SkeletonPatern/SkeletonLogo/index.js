import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const SkeletonLogo = ({ number }) => {
    return (
        Array(number).fill(0).map((item, index) => (
            <Wrapper key={index}>
                <div>
                    <Skeleton width={50} height={50} />
                </div>
                <p>
                    <Skeleton />
                </p>
            </Wrapper>
        ))
    )
}

export default SkeletonLogo;

const Wrapper = styled.div`
    p {
        margin: 8px;
    }
`  
