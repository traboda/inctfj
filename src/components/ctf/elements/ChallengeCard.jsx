import React from 'react';
import shortid from 'shortid';
import styled from "@emotion/styled";
import ReactMarkdown from 'react-markdown'
const gfm = require('remark-gfm')

import Window from "./Window";

const ChallengeCardWrap = styled.div`
    font-family: 'Poppins', sans-serif!important;
    p {
       font-size: 13px;
    }
`

const ChallengeCard = ({
    cardID, position, type,
    ID, name, description, tags, file,
    isSolved,
    onDrag = () => {}, onClose = () => {}
}) => {

    const handleDrag = (e, position) => { onDrag({
        cardID, type, position, ID, name, description, tags, file,
    }); }

    return <Window
        cardID={cardID}
        position={position}
        title={`Challenge #${ID}`}
        onClose={onClose}
        onDrag={handleDrag}
    >
        <ChallengeCardWrap className="p-6">
            <h3 className="font-punk">{name} {isSolved && ' (Solved)'}</h3>
            <div>
                <ReactMarkdown plugins={[gfm]} children={description} />
            </div>
            <div className="my-2">
                {(file?.length > 0) &&
                <div style={{ fontSize: '13px' }}>
                    <div><b>Files: </b></div>
                    <div>
                        {file.map((f) =>
                            <a key={shortid.generate()} className="block my-2" href={`https://play.inctf.in/junior/files/${ID}/${f}`}>{f}</a>
                        )}
                    </div>
                </div>}
            </div>
            <div className="my-2">
                {(tags?.length > 0) &&
                    <div key={shortid.generate()} style={{ fontSize: '13px' }}>
                        <span><b>Tags: </b></span>
                        {tags}
                    </div>
                }
            </div>
        </ChallengeCardWrap>
    </Window>;

};

export default ChallengeCard;