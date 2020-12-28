import React from 'react';
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import innerGlitchAnimation from "./glitch";

const cardAnimation = keyframes`
   0%{
      background: repeating-linear-gradient( -35deg, transparent 4px, #750 0, #750 6px, transparent 0, transparent 9px ), rgba(255, 254, 30, 0.8);
      background-size: 30% 12px;
      background-position: 99.6% calc(100% - 3px), 0 0;
      background-repeat: no-repeat;
   }
   3%{
      background: repeating-linear-gradient( 45deg, transparent 4px, #750 0, #750 6px, transparent 0, transparent 9px ), rgba(255, 204, 230, 0.8);
      background-size: 45% 12px;
      background-position: 99.6% calc(100% - 3px), 0 0;
      background-repeat: no-repeat;
   }
   5%{
      background: repeating-linear-gradient( -95deg, transparent 4px, #750 0, #750 6px, transparent 0, transparent 9px ), rgba(205, 254, 30, 0.8);
      background-size: 50% 12px;
      background-position: 99.6% calc(100% - 3px), 0 0;
      background-repeat: no-repeat;
   }
   50%{
      background: repeating-linear-gradient( 45deg, transparent 4px, #750 0, #750 6px, transparent 0, transparent 9px ), rgba(255, 178, 30, 0.8);
      background-size: 45% 12px;
      background-position: 99.6% calc(100% - 3px), 0 0;
      background-repeat: no-repeat;
   }
   53%{
      background: repeating-linear-gradient( -45deg, transparent 4px, #750 0, #750 6px, transparent 0, transparent 9px ), rgba(255, 254, 130, 0.8);
      background-size: 60% 12px;
      background-position: 99.6% calc(100% - 3px), 0 0;
      background-repeat: no-repeat;
   }
   58%{
      background: repeating-linear-gradient( 5deg, transparent 4px, #750 0, #750 6px, transparent 0, transparent 9px ), rgba(255, 254, 30, 0.8);
      background-size: 50% 12px;
      background-position: 99.6% calc(100% - 3px), 0 0;
      background-repeat: no-repeat;
   }
`;

const ChallengeItemContainer = styled.button`
    display: block;
    color: black;
    min-height: 10vh;
    background: ${({isSolved}) => 
        isSolved ?
            `repeating-linear-gradient( -45deg, transparent 4px, #3A3 0, #3A3 6px, transparent 0, transparent 9px ), rgba(255, 214, 0, 0.9)` :
            `repeating-linear-gradient( -45deg, transparent 4px, #750 0, #750 6px, transparent 0, transparent 9px ), rgba(255, 214, 0, 0.9)`
    };
    background-size: 50% 12px;
    background-position: 99.6% calc(100% - 3px), 0 0;
    background-repeat: no-repeat;
    padding: 10px 30px;
    clip-path: polygon(0px 0px, calc(100% - 25px) 0px, 100% 25px, 100% 100%, 20px 100%, 0px calc(100% - 20px), 0px 50%, 10px calc(50% - 10px), 10px calc(15% + 10px), 0px 15%);
    border: none;
    outline: none!important;
    width: 100%;
    text-align: left;
    h3{
      font-size: 23px;
      line-height: 1;
      margin-bottom: 0;
    }
    div {
      font-size: 18px;
    }
    position: relative;
    user-select: none;
    transition: background 0.2s;
    --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
    --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
    --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
    --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
    --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
    --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
    --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
    .glitch {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        padding: 8px 20px;
    }
    &:hover {
      animation: ${cardAnimation} 2s infinite;
      .glitch {
        display: block;
        animation: ${innerGlitchAnimation} 2s infinite;
      }
    }
`;

const ChallengeItem = ({
    ID: id, name, points, solves, onClick = () => {}, isSolved,
}) => {

    return <ChallengeItemContainer isSolved={isSolved} onClick={onClick}>
        <div className="glitch">
            <h3>{name} {isSolved && `{Solved}`}</h3>
            <div className="mb-2">{points} Pts | {solves} Solves</div>
        </div>
        <h3>{name} {isSolved && ' (Solved)'}</h3>
        <div className="mb-2">{points} Pts | {solves} Solves</div>
    </ChallengeItemContainer>

};

export default ChallengeItem;