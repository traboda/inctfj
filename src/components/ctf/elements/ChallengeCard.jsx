import React from 'react';
import styled from "@emotion/styled";

import Window from "./Window";

const ChallengeCardWrap = styled.div`
    font-family: 'Poppins', sans-serif!important;
    p {
       font-size: 13px;
    }
`

const ChallengeCard = ({
    cardID, position, type,
    ID, name, description, tags, files,
    onDrag = () => {}, onClose = () => {}
}) => {

    const handleDrag = (e, position) => { onDrag({
        cardID, type, position, ID, name, description, tags, files,
    }); }

    return <Window
        cardID={cardID}
        position={position}
        title={`Challenge #${ID}`}
        onClose={onClose}
        onDrag={handleDrag}
    >
        <ChallengeCardWrap className="p-3">
            <h3 className="font-punk">{name}</h3>
            <div>
                <p>{description}</p>
            </div>
            <div>
                {(tags?.length > 0) &&
                    <div style={{ fontSize: '13px' }}>
                        <span><b>Tags: </b></span>
                        {tags}
                    </div>
                }
            </div>
        </ChallengeCardWrap>
    </Window>;

};

export default ChallengeCard;