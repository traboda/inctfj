import React from 'react';
import styled from "@emotion/styled";

import IndianStates from "../../data/indian-states";

const FameCardWrap = styled.div`
   height: 100%;
   font-size: 13px;
   background: white;
   color: black;
   border-radius: 0.5rem;
   img {
      max-width: 100%;
      margin: 0;
      padding: 0;
   }
   h4 { 
      font-size: 16px;
      margin-bottom: 0;
      color: black;
      img {
         height: 32px;
         margin-left: 5px;
      }
   }
   span {
      font-size: 13px;
   }
   div {
      line-height: 1.25;
   }
   b {
      color: black;
   }
   .rank {
      font-size: calc(1.25rem + 0.75vw);
      line-height: 1;
      color: black;
   }
`;

const FameCard = ({ rank, username, state, points, institution }) => {

    const getStateName = () => {
        if(IndianStates.filter((s) => s.value === state).length > 0){
            return IndianStates.filter((s) => s.value === state)[0].label
        }
        return  state
    }

    return <FameCardWrap>
        <div className="flex flex-wrap p-2 border rounded-lg h-full">
            <div className="w-3/4">
                <h4 className="mb-2 text-2xl font-bold">
                    {rank}.  @{username}
                </h4>
                <div>
                    {institution && <div style={{ fontSize: '14px', color: '#333' }} className="line-height-1 mb-1">{institution}</div>}
                    {state && <div>{getStateName()}</div>}
                </div>
            </div>
            <div className="w-1/4 flex items-start justify-end">
                <span className="text-xl pr-2"><b>{points}</b></span>
            </div>
        </div>
    </FameCardWrap>;

};

export default FameCard;