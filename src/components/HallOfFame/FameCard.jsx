import React from 'react';
import styled from "@emotion/styled";

import IndianStates from "../../data/indian-states";

const FameCardWrap = styled.div`
   height: 100%;
   box-shadow: 2px 3px 8px rgba(0,0,0,0.15);
   font-size: 13px;
   background: rgba(80,10,130,0.25);
   color: white;
   border-radius: 3px;
   img {
      max-width: 100%;
      margin: 0;
      padding: 0;
   }
   h4 { 
      font-size: 16px;
      margin-bottom: 0;
      color: white;
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
      color: #AAA;
   }
   b {
      color: white;
   }
   .rank {
      font-size: calc(1.5rem + 1vw);
      line-height: 1;
      color: white;
   }
`;

const FameCard = ({
  rank, username, name, state, age, points, school, city, isQueen
}) => {

    const getStateName = () => {
        if(IndianStates.filter((s) => s.value === state).length > 0){
            return IndianStates.filter((s) => s.value === state)[0].label
        }
        return  state
    }

    return <FameCardWrap>
        <div className="flex flex-wrap  mx-0 p-2">
            <div className="w-1/5 text-right justify-center items-center flex">
                {
                    rank === 1 ? <img src={require('../../assets/images/icons/crown.png')} /> :
                        rank === 2 ? <img src={require('../../assets/images/icons/viking.png')} /> :
                            rank === 3 ? <img src={require('../../assets/images/icons/samurai.png')} /> :
                                isQueen ? <img src={require('../../assets/images/icons/queen.png')} />
                                    : <div className="rank">{rank}. </div>
                }
            </div>
            <div className="w-4/5 md:w-2/5 pr-4 pl-4 p-1">
                <h4 className="font-bold">{name}</h4>
                <div className="mb-2">@{username}</div>
                {(age || points) &&
                <div>
                    <span className="pr-2"><b>{points}</b> pts</span>
                    {age && <span><b>{age}</b> Yrs</span>}
                </div>}
            </div>
            <div className="md:w-2/5 pr-4 pl-4 flex p-1">
                <div>
                    {school && <div style={{ fontSize: '15px', color: '#fd7e14' }} className="line-height-1 mb-1">{school}</div>}
                    {(city||state) && <div>{city}, {getStateName()}</div>}
                </div>
            </div>
        </div>
    </FameCardWrap>;

};

export default FameCard;