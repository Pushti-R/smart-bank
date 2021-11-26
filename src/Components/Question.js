import React, { useState } from 'react'
import styled from 'styled-components'
import plus from '../img/plus.svg'
import minus from '../img/minus.svg'

function Question({title, description}) {
    const [toggle, setToggle] = useState(false)

    const btntoggle = () => {
        setToggle(!toggle);
    }
    return (
        <QuestionStyled>
            <div className="q-con">
                <div className="toggle-title">
                    <h4> {title} </h4>
                    <button onClick = {btntoggle}>
                        {toggle ? <img src = {minus} alt = "" /> : <img src = {plus} alt = "" />}
                    </button>
                </div>
                {toggle && <p>{description}</p>}
            </div>
        </QuestionStyled>
    )
}

const QuestionStyled = styled.div`
    background-color: #fff;
    margin: 1rem 0;
    padding: 1.4rem 1rem;
    border-radius: 24px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

    .q-con {
        transition: all 0.4s ease-in-out;
    }

    h4 {
        transition: all 0.4s ease-in-out;
        color: #16194f;
        font-size: 1.3rem;
    }

    .toggle-title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
        }
    }
`

export default Question
