import React, {useState} from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const ItemContainer = styled('div')`
    position: relative;
`;

const ItemDropDown = styled('div')`
    position: absolute;
    top: calc(100% + 6px);
    left: -5px;
    background: white;
    padding: 1rem;
    border-radius: 1.25rem;
    box-shadow: 5px 6px 8px rgba(0,0,0,0.15);
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
            <ItemContainer onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <Link href={item.link} passHref>
                    <a>{item.label}</a>
                </Link>
                {(item?.items?.length > 0) && (
                    <ItemDropDown className={isOpen && isVisible ? 'c-visible' : ''}>
                        {item.items.map((i) =>
                            <Link href={i.link} passHref>
                                <a className="block">
                                    {i.label}
                                    {i?.badge && (
                                        <div className="bg-green-100 px-2 py-1 ml-1 inline rounded text-sm">
                                            {i.badge}
                                        </div>
                                    )}
                                </a>
                            </Link>
                        )}
                    </ItemDropDown>
                )}
            </ItemContainer>
        </Fade>
    )

};

export default TopBarItem;