import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const DiscussionPortals = styled.a`
    min-height: 25vmin;
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
    }
    img {
        height: 72px!important;
        filter: drop-shadow(2px 3px 8px rgba(0,0,0,0.3));
        margin-bottom: 5px;
        margin-right: 10px;
    }
`;

const DiscordDiscussion = styled(DiscussionPortals)`
    background: #14171A;
`;

const TelegramDiscussion = styled(DiscussionPortals)`
    background: #0088cc ;
`;

const TwitterDiscussion = styled(DiscussionPortals)`
    background: #14171A ;
`;

const PromoLinks = () => {

    return <div className="row mx-0">
        <div className="col-md-6 px-0">
            <TwitterDiscussion href="/ctf">
                <Fade left>
                    <div>
                        <img src={require('../../assets/images/icons/sword.png')} alt="Open CTF Arena" />
                        <h3>Open CTF Arena</h3>
                    </div>
                </Fade>
            </TwitterDiscussion>

        </div>
        <div className="col-md-6 px-0">
            <DiscordDiscussion href="https://traboda.com/register" rel="noopener noreferrer" >
                <Fade right>
                    <div>
                        <img src={require('../../assets/images/logos/traboda_icon.png')} alt="Join Traboda" />
                        <h3 passcode="abracadabra">Join Traboda</h3>
                    </div>
                </Fade>
            </DiscordDiscussion>
        </div>
    </div>
};

export default PromoLinks;
