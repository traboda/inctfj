import React, {useEffect, useState} from 'react';
import shortid from 'shortid';
import styled from "@emotion/styled";

import {APIFetch} from "../../utils/APIFetch";
import {scoreboardQuery} from "../../graphql/ctf";
import Window from "./elements/Window";

const LeaderBoard = styled.div`
    font-size: 13px;
    padding-bottom: 5vh;
    font-family: 'Poppins', sans-serif!important;
`

const ScoreboardWindow = ({
  cardID, position, type,
  onDrag = () => {}, onClose = () => {}
}) => {

    const [data, setData] = useState(null);

    const handleDrag = (e, position) => { onDrag({cardID, type, position}); }

    const fetchScoreboard = () => {
        APIFetch({ query: scoreboardQuery }).then(({ data, errors, success }) => {
            if(success) {
                setData(data.scoreboard);
            }
        })

    };

    useEffect(fetchScoreboard, [])

    return <Window
        cardID={cardID}
        position={position}
        onDrag={handleDrag}
        onClose={onClose}
        title="Scoreboard"
        defaultHeight="400px"
        defaultWidth="300px"
    >
        <div className="p-2">
            <h3>Scoreboard</h3>
            {data?.length > 0 ?
                <LeaderBoard>
                    <div className="flex flex-wrap  mx-0 border-b mb-2">
                        <div className="w-2/3 flex items-center px-1">
                            #{`{Rank}`}. @{`{Username}`}
                        </div>
                        <div className="w-1/3 text-right px-2">
                            {`{Score}`}
                        </div>
                    </div>
                    {data.map((s, index) =>
                        <div key={shortid.generate()} className="flex flex-wrap  mx-0 mb-2">
                            <div className="w-2/3 flex items-center px-1">
                                #{index+1}. @{s.username}
                            </div>
                            <div className="w-1/3 text-right px-2">
                                {s.score}
                            </div>
                        </div>
                    )}
                </LeaderBoard> :
                null
            }
        </div>
    </Window>

};

export default ScoreboardWindow;