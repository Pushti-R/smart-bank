import React from 'react';
import styled from 'styled-components';

function PrimaryButton({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: #f44e77;
    padding: 0.7rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 650px){
        display: none;
    }
`

export default PrimaryButton
