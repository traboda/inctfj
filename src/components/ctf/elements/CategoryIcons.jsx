import React from 'react';
import styled from "@emotion/styled";
import {default as catData} from '../../../data/category-icons';
import innerGlitchAnimation from "./glitch";
import Slide from 'react-reveal/Slide';


const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 15vh;
    max-width: 120px;
    min-height: 75vh;
    background: rgba(0,0,0,0.5);
    border-right: 3px solid #fc0;
    border-bottom: 3px solid #fc0;
`

const TopBar = styled.div`
    background: #fc0;
    padding: 2.5px 5px;
    font-size: 13px;
    text-transform: uppercase;
    color: black;
    button {
        font-size: 23px;
        line-height: 1;
        padding: 3.5px 5px;
        background: transparent;
        border: none;
        font-weight: 900;
    }
`

const CategoryIconButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    text-align: center;
    padding: 8px 16px;
    display: block;
    width: 100%;
    user-select: none;
    transition: background 0.2s;
    position: relative;
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
        padding: 14px 22px;
    }
    &:hover {
      .glitch {
        display: block;
        animation: ${innerGlitchAnimation} 2s infinite;
      }
    }
    img {
       width: 36px;
       height: 36px;
       margin-bottom: 5px;
    }
    label{
      display: block;
      font-size: 15px;
      text-transform: uppercase;
    }
`

const CategoryButton = ({ slug, onClick }) => {
    const cat = catData[slug];

    return <CategoryIconButton onClick={onClick}>
        <div className="glitch">
            <img alt={cat.label} src={cat.icon} />
            <label>{cat.label}</label>
        </div>
        <img alt={cat.label} src={cat.icon} />
        <label>{cat.label}</label>
    </CategoryIconButton>
};

const CategoryIcons = ({
    categories, onOpenCategory = () => {},
}) => {

    return categories?.length > 0 ? <Slide left>
        <MenuContainer className="font-punk">
            <TopBar>
                // Categories
            </TopBar>
            {categories?.map((c) =>
                <CategoryButton
                    key={c[0]}
                    slug={c[0]}
                    onClick={() => onOpenCategory({ slug: c[0], challenges: c[1] })}
                />
            )}
        </MenuContainer>
    </Slide> : <div />;

};

export default CategoryIcons;