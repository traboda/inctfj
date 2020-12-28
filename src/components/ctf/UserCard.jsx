import React from 'react';
import styled from "@emotion/styled";

const UserBadgeCard = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    background: #fc0;
    text-align: right;
    padding: 5px 15px;
    min-width: 10vw;
    clip-path: polygon(1063px 0px, 98.01% 72px, 21px 98.57%, -39px 0px, 146px -18.82%, 22px -9px, 139px -20px, 10px -117.35%);
    user-select: none;
`;

const RankView = styled.div`
    font-size: 12px;
    span {
       display: block;
       font-size: 9px;
    }
    b {
        font-size: 20px;
        font-weight: 600;
        line-height: 1;
    }
`

const UserCard = ({
    score
}) => {

    return <UserBadgeCard>
        <div>
            <RankView>
                <div><b>{score}</b>pts</div>
                <div>My Score</div>
            </RankView>
        </div>
    </UserBadgeCard>

};

export default UserCard;