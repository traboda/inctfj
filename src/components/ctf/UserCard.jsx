import React from 'react';
import styled from "@emotion/styled";

const UserBadgeCard = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    background: #fc0;
    text-align: right;
    padding-right: 5px!important;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    min-width: 15vw;
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
        padding: 0 2.5px;
    }
`

const UserCard = ({
    username, score, rank=1, total=50,
}) => {

    return <UserBadgeCard>
        <div>
            <div className="row p-0 mx-0">
                <div className="col-4 px-1">
                    <RankView>
                        <b>#{rank}</b>/{total}
                        <span>My Rank</span>
                    </RankView>
                </div>
                <div className="col-4 px-1">
                    <RankView>
                        <b>{score}</b>pts
                        <span>My Score</span>
                    </RankView>
                </div>
            </div>
        </div>
    </UserBadgeCard>

};

export default UserCard;