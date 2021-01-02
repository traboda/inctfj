import React from 'react';
import styled from "@emotion/styled";

const QuestionContainer = styled.div`
    padding: 0.75rem 1rem;
    width: 100%;
    background: rgba(75, 20, 150, 0.25)!important;
    color: white!important;
    box-shadow: 2px 3px 8px rgba(0,0,0,0.25);
    border-radius: 5px;
    margin-bottom: 0.75rem;
    h5 { margin-bottom: 0; font-size: 18px; }
    p {
      font-size: 15px;
      margin-top: 8px;
      margin-bottom: 0;
    }
    button {
      display: flex;
      align-items: center;
      padding: 0;
      text-align: left;
      background: none!important;
      border: none;
      color: #fd7e14;
      font-size: calc(1rem + 0.25vw);
      line-height: 1.2;
      i {
         font-size: 22px;
         margin-right: 8px;
      }
      &:focus, &:hover {
        outline: none!important;
      }
    }
    li {
      margin: 5px 0;
    }
`;

const QuestionCard = ({ question, answer, isOpen, onClick = () => {} }) => {

    return <QuestionContainer>
        <button onClick={onClick}>
            {isOpen ? <i className="fa fa-chevron-up" /> : <i className="fa fa-chevron-down" />}
            {question}
        </button>
        {isOpen && <div className="mx-2 mt-3 mb-1">{answer}</div>}
    </QuestionContainer>

};

export default QuestionCard;