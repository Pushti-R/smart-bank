import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ChartStats from './ChartStats'
import chart from '../img/chart.svg'
import AnimationButton from './AnimationButton'

function ChartSection() {
    return (
        <ChartStyled>
            <InnerLayout>
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="money">
                                <ChartStats name = {'Balance'} amount = {'$250'} />
                                <ChartStats name = {'Last Transaction'} amount = {'$1,000'} />
                            </div>
                            <img src= {chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className = "secondary-heading">Manage your finances like a pro in no time</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, totam ullam. Asperiores, 
                            quia officia delectus molestias, harum explicabo deserunt consectetur sed ipsum dignissimos 
                            dolor temporibus!</p>
                        <AnimationButton name = {'Learn More'} />
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled>
    )
}

const ChartStyled = styled.section`
    .chart-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left {
            width: 90%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats {
                img {
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .money {
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }
        .chart-right {
            padding-left: 2rem;
            p{
                padding: 1.3rem 0;
            }
        }
    }

    @media screen and (max-width: 440px){
        text-align: center;
        align-items: center;
        .secondary-heading {
            font-size: 1.8rem;
        }
        p {
            font-size: 1rem;
        }
        .stats {
            img {
                width: 80%;
                padding-left: 2.3rem;
            }
            
        }
        .money {
            width: 80%;
            padding-left: 2.3rem;
        }
    }
`

export default ChartSection
