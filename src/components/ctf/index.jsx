import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import shortid from 'shortid';
const _ = require('lodash');

import '../../styles/cyberpunk.css';
import ChallengeCard from "./elements/ChallengeCard";
import CategoryCard from "./elements/CategoryCard";
import {APIFetch} from "../../utils/APIFetch";
import {challengesQuery, myQuery} from "../../graphql/ctf";
import CategoryIcons from "./elements/CategoryIcons";
import FlagSubmitter from "./FlagSubmitter";
import UserCard from "./UserCard";
import BrandingView from "./branding";
import NotificationsWindow from "./Notifications";
import ScoreboardWindow from "./Leaderboard";



const CTFModuleWrap = styled.div`
    background: ${({bg}) => bg ? `url(${bg})` : null};
    background-size: cover;
    height: 100vh;
    width: 100%;
    overflow: hidden!important;
    padding: 0.5rem;
    .bg-wrapper{
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100vh;
        overflow-y: auto;
    }
`;

const CTFModule = () => {

    const [categories, setCategories] = useState([]);
    const [myProfile, setMyProfile] = useState(null);

    const [firstPos, setFirstPos] = useState({ x: 120, y: -500, isSet: false });
    const [windows, setWindows] = useState([
        { type: 'notification', cardID: shortid.generate(), position: { x: 800, y: 100} },
        { type: 'scoreboard', cardID: shortid.generate(), position: { x: 1080, y: -280 } },
    ]);

    const handleOpenWindow = (w) => {
        const window = { ...w, cardID: shortid.generate(), position: firstPos };
        if(windows.length > 0){
            setWindows([...windows, window]);
        } else {
            setWindows([window]);
        }
    }

    const handleOpenCategory = (c) => {
        const category = {...c, type: 'category'}
        handleOpenWindow(category);
    }

    const handleOpenChallenge = (c) => {
        const challenge = {...c, type: 'challenge'};
        handleOpenWindow(challenge)
    };

    const handleOpenNotification = async () => {
        handleOpenWindow({ type: 'notification' })
    }

    const handleOpenScorecard = async () => {
        handleOpenWindow({ type: 'scoreboard' })
    }

    const fetchChallenges = () => {
        APIFetch({ query: challengesQuery }).then(({ success, data, errors}) => {
            if(success) {
                const challenges = data.challenges;
                setCategories(Object.entries(_.groupBy(challenges, 'categories')));
            }
        })
    };

    useEffect(fetchChallenges, []);

    const fetchMyScore = () => {
        APIFetch({ query: myQuery }).then(({ success, data, errors}) => {
            if(success){
                setMyProfile(data.me);
            }
        })
    }

    useEffect(fetchMyScore, []);

    const handleDragCard = (card) => {
        setFirstPos({...card.position, x: card.position.x -25, y: card.position.y - 60, isSet: true });
        const newList = windows.map((c) => {
            if(c.cardID !== card.cardID) return c;
            else return card;
        });
        setWindows([...newList]);
    }

    const handleCloseCard = (cardID) => {
        const newList = windows.filter((c) => c.cardID !== cardID);
        setWindows([...newList]);
    };

    return<CTFModuleWrap bg={require('../../assets/images/backgrounds/cyberpunk/platform.jpg')}>
        <BrandingView />
        <FlagSubmitter />
        {myProfile && <UserCard {...myProfile} />}
        <CategoryIcons categories={categories} onOpenCategory={handleOpenCategory} />
        {windows.map((c) => {
            if(c.type === 'challenge') {
                return <ChallengeCard
                    id={c.id} {...c}
                    key={c.cardID}
                    onDrag={handleDragCard}
                    onClose={handleCloseCard}
                />
            } else if(c.type === 'category') {
                return <CategoryCard
                    key={c.cardID}
                    {...c}
                    onSelectChallenge={handleOpenChallenge}
                    onDrag={handleDragCard}
                    onClose={handleCloseCard}
                />
            } else if(c.type === 'notification') {
                return <NotificationsWindow
                    key={c.cardID}
                    {...c}
                    onDrag={handleDragCard}
                    onClose={handleCloseCard}
                />
            } else if(c.type === 'scoreboard') {
                return <ScoreboardWindow
                    key={c.cardID}
                    {...c}
                    onDrag={handleDragCard}
                    onClose={handleCloseCard}
                />
            }
        })}

    </CTFModuleWrap>;

};

export default CTFModule;