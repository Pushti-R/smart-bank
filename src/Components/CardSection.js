import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import card from '../img/creditcard.svg'

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One Card for all your Payments
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Suscipit quis soluta adipisci qui eligendi nam, mollitia 
                            quae quam! Assumenda voluptatem perferendis illo ipsum, non amet?
                        </p>
                    </div>
                    <div className="card-right">
                        <img src= {card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.div`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        @media screen and (max-width: 690px){
            grid-template-columns: repeat(1, 1fr);
        }

        .card-right {
            display: flex;
            justify-content: flex-end;
        }

        .card-right {
            p {
                padding: 1rem 0;
            }
        }
    }

    @media screen and (max-width: 440px){
        .secondary-heading {
            font-size: 1.8rem;
            margin-bottom: 0.8rem;
        }
        .card-right {
            img {
                width: 300px;
            }
        }
        p {
            font-size: 1rem;
            margin-bottom: 1rem;
        }
    }
`

export default CardSection
