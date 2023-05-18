import React, { useState } from 'react';
import styled from '@emotion/styled';
import Fade from 'react-awesome-reveal';

const ItemDropDown = styled('div')`
    position: absolute;
    top: calc(100% + 6px);
    left: -5px;
    background: white;
    padding: 1rem;
    border-radius: 1.25rem;
    box-shadow: 1px 6px 8px rgba(0,0,0,0.2);
    width: 250px;
    max-width: 100vw;
    transition: all 0.2s ease-in;
    opacity: 0;
    pointer-events: none;
    &.c-visible {
      opacity: 1;
      pointer-events: auto;
    }

    @media screen and (max-width: 768px) {
      top: initial;
      bottom: calc(100% + 6px);
    }
`;

const TopBarItem = ({ item, isVisible }) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <Fade delay={0}>
      <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <a href={item.link}>{item.label}</a>
        {(item?.items?.length > 0) && (
        <ItemDropDown className={isOpen && isVisible ? 'c-visible' : ''}>
          {item.items.map((i) =>
            (<a href={i.link} className="block">
              {i.label}
              {i?.badge && (
              <div className={`${i?.badgeColor ? i.badgeColor : 'bg-green-100'} px-2 py-1 ml-1 inline rounded text-sm`}>
                {i.badge}
              </div>
              )}
            </a>),
          )}
        </ItemDropDown>
        )}
      </div>
    </Fade>
  );

};

export default TopBarItem;