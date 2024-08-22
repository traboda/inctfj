import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import IndianStates from '../../data/indian-states';
import { ParticipantProfile } from '../../data/types/stats';

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
      font-size: calc(1.5rem + 1vw);
      line-height: 1;
      color: black;
   }
`;

const FameCard = ({
  rank, username, name, state, points, institution,
}: ParticipantProfile) => {

  const getStateName = () => {
    if (IndianStates.filter((s) => s.value === state).length > 0) {
      return IndianStates.filter((s) => s.value === state)[0].label;
    }
    return state;
  };

  return (<FameCardWrap>
    <div className="flex flex-wrap p-2 border rounded-lg h-full items-center">
      <div className="w-1/5 text-right justify-center items-center flex">
        {rank === 1 ? <Image src="/assets/images/icons/crown.png" alt="Crown" /> :
          rank === 2 ? <Image alt="viking" src="/assets/images/icons/viking.png" /> :
            rank === 3 ? <Image alt="Samurai" src="/assets/images/icons/samurai.png" /> : (
              <div className="rank">
                {rank}
                .
                {' '}
              </div>
            )}
      </div>
      <div className="w-4/5 md:w-2/5 pr-4 pl-4 p-1">
        <h4 className="font-bold">{name}</h4>
        <div className="mb-2">
          @
          {username}
        </div>
        {(points) &&
        <div>
          <span className="pr-2">
            <b>{points}</b>
            {' '}
            pts
          </span>
        </div>}
      </div>
      <div className="md:w-2/5 pr-4 pl-4 flex p-1">
        <div>
          {institution && <div style={{ fontSize: '15px', color: '#333' }} className="line-height-1 mb-1">{institution}</div>}
          {state && <div>{getStateName()}</div>}
        </div>
      </div>
    </div>
  </FameCardWrap>);

};

export default FameCard;