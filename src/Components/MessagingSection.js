import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import messaging from '../img/conversation.svg'
import bgCircles from '../img/circleBg.svg'

function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <h2 className = "secondary-heading">
                            We support you in 5 different languages
                        </h2>
                        <p className = "m-para">Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Commodi, assumenda sint 
                        nemo quisquam obcaecati et nisi nulla tenetur 
                        molestiae iusto qui incidunt error.</p>
                        <div className="images-con">
                            <img src= {avatar1} alt="" className="image-1" />
                            <img src= {avatar2} alt="" className="image-2" />
                            <img src= {avatar3} alt="" className="image-3" />
                            <img src= {avatar4} alt="" className="image-4" />
                            <img src= {avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                        </div>
                        <img src= {bgCircles} alt="" className="bg" />
                    </div>
                    <div className="right-items">
                        <img src= {messaging} alt="" />
                        <img src= {bgCircles} alt="" className="bg" />
                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}

const MessageStyle = styled.section`
    .message-con {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .left-items {
        position: relative;
        padding-right: 2rem;
        .m-para {
            padding: 1rem 0;
        }
        .images-con {
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5 {
                margin-left: -22px;
            }
        }
        .bg {
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }

    .right-items {
        position: relative;
        img {
            padding-left: 2rem;
        }
        .bg {
            position: absolute;
            bottom: -7%;
            right: -10%;
            z-index: -1;
        }
    }

    @media screen and (max-width: 440px){
        .secondary-heading {
            font-size: 1.8rem;
        }
        .right-items {
            img {
                width: 280px;
                padding-left: 0rem;
            }
            .bg {
                display: none;
            }
        }
        .left-items {
            .bg {
                display: none;
                padding-right: 0;
            }
            .image-1, .image-2, .image-3, .image-4, .image-5 {
                width: 45px;
                margin-bottom: 1rem;
            }
        }
        .m-para {
            font-size: 1rem;
        }
    }
`

export default MessagingSection
