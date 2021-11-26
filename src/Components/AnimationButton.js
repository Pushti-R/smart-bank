import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'
import blob1 from '../img/blob_top.svg'
import blob2 from '../img/blob_bottom.svg'

function AnimationButton({name}) {
    return (
        <AnimationButtonStyled>
            {name}
            <img src= {arrow} alt="" className = "arrow" />
            <img src= {blob1} alt="" className = "blob1" />
            <img src= {blob2} alt="" className = "blob2" />
        </AnimationButtonStyled>
    )
}

const AnimationButtonStyled = styled.button`
    background-color: #16194f;
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    .arrow {
        transition: all 0.4s ease-in-out;
        padding-left: 0.9rem;
    }

    &:hover {
        color: #f44e77;
        .blob1 {
            transform: translateX(-100px);
        }
        .blob2 {
            transform: translateX(140px);
        }
        .arrow {
            padding-left: 1.4rem;
        }
    }

    .blob1, .blob2 {
        position: absolute;
        transition: all 0.4s ease-in-out;
        pointer-events: none;
    }

    .blob1 {
        top: 0;
        right: 0;
    }

    .blob2 {
        bottom: 0;
        left: 0;
    }

    img {
        padding-left: 0.9rem;
    }
`

export default AnimationButton;
