import React from 'react'
import styled from 'styled-components';

const Partner = () => {
    return (
        <Wrapper>
            <div>
                <h3>ĐỐI TÁC</h3>
                <div>
                    <a href="https://shopeepay.vn/">
                        <img src="https://moveek.com/bundles/ornweb/partners/shopeepay-icon.png" alt="" />
                    </a>
                    <a href="https://momo.vn/">
                        <img src="https://moveek.com/bundles/ornweb/partners/momo.png" alt="" />
                    </a>
                    <a href="https://foxpay.vn/">
                        <img src="https://moveek.com/bundles/ornweb/partners/foxpay-icon.png" alt="" />
                    </a>
                    <a href="https://www.megagscinemas.vn/">
                        <img src="https://moveek.com/bundles/ornweb/partners/mega-gs-cinemas.png" alt="" />
                    </a>
                    <a href="https://cinestar.com.vn/">
                        <img src="https://moveek.com/bundles/ornweb/partners/cinestar.png" alt="" />
                    </a>
                    <a href="https://payoo.vn/">
                        <img src="https://moveek.com/bundles/ornweb/partners/payoo.jpg" alt="" />
                    </a>
                    <a href="https://betacineplex.vn/">
                        <img src="https://moveek.com/bundles/ornweb/partners/beta-cineplex-v2.jpg" alt="" />
                    </a>
                </div>
            </div>
        </Wrapper>
    )
}

export default Partner;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    h3 {
        text-align: center;
        line-height: 1.5;
        margin-bottom: 8px;
    } 

    div {
        text-align: left;
        img {
            display: inline-block;
            width: 15%;
            border-radius: 100%;
            margin: 4px;
            box-shadow: var(--BoxShadow);
            transition: all 0.5s;
            &:hover {
                border: 2px solid var(--HoverTextColor);
            }
        }
    }
`


