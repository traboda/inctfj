import React from 'react';
import {Resizable} from "re-resizable";
import Draggable from "react-draggable";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import innerGlitchAnimation from "./glitch";

const WindowContainer = styled.div`
    color: white;
    background: rgba(0,0,0,0.85);
    border-left: 5px solid #fc0;
    border-right: 5px solid #fc0;
    border-bottom: 5px solid #fc0;
    overflow: hidden;
    height: 100%;
    p, h1, h2, h3, h4, h5, h6 {
      cursor: auto;
    }
    .window-body {
       width: 100%;
       height: 100%;
       overflow: auto;
    }
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
      .glitch {
        display: block;
        width: 100%;
        animation: ${innerGlitchAnimation} 2s infinite;
      }
    }
`;

const TopBar = styled.div`
    background: #fc0;
    padding: 0 5px;
    font-size: 13px;
    text-transform: uppercase;
    color: black;
    cursor: move;
    &:focus,&:hover {
       background:  #F9A825;
    }
    button {
        font-size: 23px;
        line-height: 1;
        padding: 0 5px;
        background: transparent;
        border: none;
        font-weight: 900;
        &:hover {
          background: #AA00FF;
          color: white;
          outline: none!important;
        }
    }
`;

const Window = ({
    cardID, position, title, defaultWidth = '450px', defaultHeight = '180px',
    hideCloseButton = false,
    children, onDrag = () => {}, onClose = () => {}
}) => {

    return <Draggable
        handle=".handle"
        position={{ x: Number(position?.x), y: Number(position?.y) }}
        scale={1}
        onDrag={onDrag}
        bounds="parent"
    >
        <Resizable
            defaultSize={{ width: defaultWidth, height: defaultHeight }}
            bounds="parent"
        >
                <WindowContainer className="font-punk">
                    <Fade style={{ height: '100%' }}>
                    <TopBar className="handle">
                        <div className="glitch">
                            <div className="flex flex-wrap  mx-0">
                                <div className="w-3/4 px-1 flex items-center">
                                    // {title}
                                </div>
                                {!hideCloseButton &&
                                <div className="w-1/4 px-0 flex justify-end items-center">
                                    <button onClick={() => onClose(cardID)}>X</button>
                                </div>}
                            </div>
                        </div>
                        <div className="flex flex-wrap  mx-0">
                            <div className="w-3/4 px-1 flex items-center">
                                // {title}
                            </div>
                            {!hideCloseButton &&
                            <div className="w-1/4 px-0 flex justify-end items-center">
                                <button onClick={() => onClose(cardID)}>X</button>
                            </div>}
                        </div>
                    </TopBar>
                    <div className="window-body">
                        {children}
                    </div>
                    </Fade>;
                </WindowContainer>

        </Resizable>
    </Draggable>;

};

export default Window;