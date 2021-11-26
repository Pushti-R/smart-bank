import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text">
                    <h1>Smart Banking for freelancers</h1>
                    <p className = "white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempora aut esse voluptates est consequatur animi maxime, 
                        accusamus exercitationem quibusdam at officiis nostrum quis 
                        dolorem quam repellat tempore corporis iusto! Soluta!
                    </p>
                    <SecondaryButton name = {'Register Now'} />
            </div>
            </div>
            <div className="right-content">
                <img src= {phone} alt="" className = "phone" />
                <img src= {ring1} alt="" className = "ring1" />
                <img src= {message1} alt="" className = "message1" />
                <img src= {message2} alt="" className = "message2" />
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1,1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h1 {
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
            @media screen and (max-width: 440px){
                    font-size: 2rem;
            }
        }
        .white {
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }
    .right-content {
        position: relative;
        display: flex;
        justify-content: center;
        .phone {
            width: 80%;
            @media screen and (max-width: 440px){
                width: 320px;
            }
        }
        .ring1 {
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 10s infinite;
            transition: all 0.5s ease-in-out;
            @media screen and (max-width: 440px){
                width: 80px;
            }
        }
        .message1 {
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all 0.5s ease-in-out;
            @media screen and (max-width: 440px){
                width: 80px;
            }
        }
        .message2 {
            position: absolute;
            bottom: 15%;
            left: -20px;
            animation: move 8s infinite;
            animation-delay: 0.5s;
            transition: all 0.5s ease-in-out;
            @media screen and (max-width: 440px){
                width: 80px;
            }
        }
       
    }
 

    .message1 {
        @keyframes move {
            0% {
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50% {
                transform: translateY(-15px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100% {
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }
        @keyframes move2 {
            0% {
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50% {
                transform: translateY(-15px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100% {
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }
    }
`

export default HeaderContent
