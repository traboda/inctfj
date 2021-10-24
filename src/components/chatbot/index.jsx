import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import BotButton from '../../assets/images/chatbot/chat-bubble.png';
import styled from '@emotion/styled';

import config from "./configs/chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatButton = styled.input`
width: 70px;
height: 70px;
bottom: 10px;
right: 0;
position: fixed;
outline: none;
`;

function Bot() {

    const [showBot, setShowBot] = useState(false);

    const handleClick = () => {
        setShowBot(!showBot);
    }

    return (
        <div>
            <ChatButton
                type='image'
                src={BotButton}
                onClick={handleClick}
                alt="button for chatbot"
            >
            </ChatButton>
            { showBot &&
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            }
        </div>
    );
}

export default Bot;
