import React from 'react';
import Window from "./Window";


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
        title={`Challenge #{ID}`}
        onClose={onClose}
        onDrag={handleDrag}
    >
        <div className="p-3">
            <h3>{name}</h3>
            <div>
                <p>{description}</p>
            </div>
            <div>
                {(tags?.length > 0) &&
                    <div>
                        <span><b>Tags: </b></span>
                        {tags.map((t) =>
                            <span>{t}</span>
                        )}
                    </div>
                }
            </div>
        </div>
    </Window>;

};

export default ChallengeCard;