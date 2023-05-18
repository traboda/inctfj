import React from 'react';
import styled from '@emotion/styled';

import { Champion } from '../../data/types/stats';
import IndianStates from '../../data/indian-states';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;

const ChampionCardContainer = styled.div`
   border-radius: 0.75rem;
   height: 100%;
   img {
      width: 100%;
   }
   h5 {
      font-weight: 600;
      font-size: calc(1rem + 0.5vw);
      margin-bottom: 5px;
   }
   .school-name {
      color: #fd7e14;
      line-height: 1.2;
      margin-bottom: 3px;
   }
   font-size: 13px;
`;

const ChampionCard = ({ title, state, username, name, avatar, rank, institution } : Champion) => {

  const getAvatarURL = (path) => {
    return path ? require(`../../data/${eventID}/assets/participants/${path}`) : null;
  };

  const getStateName = () => {
    const s = IndianStates.find((s) => s.value === state);
    if (s) {
      return s.label;
    } else {
      return null;
    }
  };

  return (
    <ChampionCardContainer>
      <div className="flex flex-wrap h-full w-full">
        <div
          style={{ borderRadius: '0.75rem', background: `url(${getAvatarURL(avatar)})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          className="w-1/3 lg:w-1/4 pr-4 pl-4 px-2 md:px-0"
        />
        <div className="w-2/3 lg:w-3/4 pr-4 pl-4 flex items-center p-2 md:p-4">
          <div>
            <div className="text-lg text-red-500 uppercase mb-1">{title || (rank ? `Rank #${rank}` : '')}</div>
            <div className="font-bold text-3xl mb-1">{name}</div>
            <div className="texl-xl font-mono mb-1">
              @
              {username}
            </div>
                        
            <div className="text-xl">{institution}</div>
            <div className="text-lg">{getStateName()}</div>
          </div>
        </div>
      </div>
    </ChampionCardContainer>
  );

};

export default ChampionCard;