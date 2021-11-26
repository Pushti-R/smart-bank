import React from 'react'
import styled from 'styled-components'


function ChartStats({name, amount}) {
    return (
        <ChartStatsStyled>
            <p> <b> {name} </b> </p>
            <h4> {amount} </h4>
        </ChartStatsStyled>
    )
}

const ChartStatsStyled = styled.div`
    background-color: white;
    border-radius: 50px;
    border: 1px solid #cad6f1;
    height: 10rem;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    
    h4 {
        font-size: 3rem;
        color: #554dde;
    }

    p {
        color: black;
    }

    @media screen and (max-width: 440px){
        width: 80%;
        height: 8rem;
        padding: 1rem;
        text-align: center;
        
        h4 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }

    }
`

export default ChartStats;
