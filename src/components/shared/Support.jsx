import React, { useState } from "react"
import WidgetBot from "@widgetbot/react-embed";
import styled from "@emotion/styled"

const SupportArea = styled('div')`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 8000;
`;

const SupportButton = styled('button')`
  	box-shadow: 3px 5px 5px rgba(0,0,0,0.5);
	background: #F13F17;
    color: white;
  	border-radius: 0.5rem;
  	padding: 0.75rem;
  	border: none;
  	i {
	  	font-size: 24px;
	}
  	&:focus {
	  	outline: none;
	}
  	&:hover {
	  	background: white;
	  	color: #F13F17;
	}
`;

const CloseButton = styled('div')`
    background: none;
    border: none;
    font-size: 24px;
`;

const SupportDesk = () => {

    const [isDiscordOpen, setDiscordOpen] = useState(false);

    return <SupportArea>
        {isDiscordOpen &&
        <div>
            <div className="d-flex justify-content-end">
                <CloseButton style={{  }} className="plain-button" onClick={() => setDiscordOpen(false)}>
                    <i className="fa fa-times text-danger" />
                </CloseButton>
            </div>
            <WidgetBot
                server="792639616585826335"
                channel="792639617056768003"
                height={500}
                width={400}
            />
        </div>}
        <div>
            {!isDiscordOpen &&
            <SupportButton onClick={() => setDiscordOpen(true)}>
                <i className="fa fa-comment" />
            </SupportButton>}
        </div>
    </SupportArea>
};

export default SupportDesk;