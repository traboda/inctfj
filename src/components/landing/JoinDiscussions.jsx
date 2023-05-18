import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-awesome-reveal';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const DiscussionPortals = styled.a`
    min-height: 30vmin;
    padding: 2.5vh 5vw;
    display: flex;
    align-items: center;
    text-align: center;
    color: white!important;
    text-decoration: none!important;
    div {
        display: flex;
        align-items: center;
        justify-content: left;
        text-align: left;
    }
    @media (min-width: 768px){
      justify-content: center;
      div {
          display: block!important;
          text-align: center;
      }
      h5 {
        display: none;
      }
    }
    img {
        height: 120px!important;
        filter: drop-shadow(2px 3px 8px rgba(0,0,0,0.3));
        margin: 5px auto;
    }
    &:hover {
      h5 {
        display: block;
      }
    }
`;

const DiscordDiscussion = styled(DiscussionPortals)`
    background: #7289DA;
`;

const TwitterDiscussion = styled(DiscussionPortals)`
    background: #14171A ;
`;

const LandingJoinDiscussion = () => {

    return <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full">
            <TwitterDiscussion href={data.SocialMediaHandles.find(handle => handle.label === 'Twitter').url} target="_blank" rel="noopener noreferrer">
                <Fade direction="left">
                    <div>
                        <img src={'/assets/images/logos/twitter.png'} alt="Follow us on Twitter<" />
                        <h5>Follow us on Twitter</h5>
                    </div>
                </Fade>
            </TwitterDiscussion>
        </div>

        <div className="md:w-1/2 w-full">
            <DiscordDiscussion href={data.SocialMediaHandles.find(handle => handle.label === 'Discord').url} rel="noopener noreferrer" target="_blank">
                <Fade direction="right">
                    <div>
                        <img src={'/assets/images/logos/discord.png'} alt="Join Discord Server" />
                        <h5>Join the Discord Server</h5>
                    </div>
                </Fade>
            </DiscordDiscussion>
        </div>
    </div>
};

export default LandingJoinDiscussion;
