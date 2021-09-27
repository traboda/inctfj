import React from 'react';
import shortid from "shortid";
import ChallengeItem from "./ChallengeItem";
import Window from "./Window";

const CategoryCard = ({
    cardID, position, type,
    name, slug, challenges, solvedChallenges,
    onSelectChallenge = () => {}, onDrag = () => {}, onClose = () => {}
}) => {

    const handleDrag = (e, position) => {
        onDrag({ cardID, type, position, name, slug, challenges })
    };

    return <Window
        cardID={cardID}
        position={position}
        onDrag={handleDrag}
        onClose={onClose}
        title={`${slug} category`}
        defaultWidth="720px"
        defaultHeight="300px"
    >
        <div className="px-2 py-1">
            <h2 className="mb-0">{slug}</h2>
        </div>
        <div className="flex flex-wrap  mx-0">
            {challenges.map((c) =>
                <div key={shortid.generate()} className="w-1/2 p-2">
                    <ChallengeItem
                        isSolved={solvedChallenges?.length > 0 ? solvedChallenges.includes(c.ID) : false}
                        {...c}
                        onClick={() => onSelectChallenge(c)}
                    />
                </div>
            )}
        </div>
    </Window>;

};

export default CategoryCard;