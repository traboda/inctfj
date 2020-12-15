import React, {useEffect, useState} from 'react';
import shortid from 'shortid';
const _ = require('lodash');
import styled from "@emotion/styled";

import {APIFetch} from "../../utils/APIFetch";
import {challengesQuery} from "../../graphql/ctf";
import ChallengeItem from "./elements/ChallengeItem";

const CategoryContainer = styled.div`
    color: white;
    h2 {
      text-transform: capitalize;
    }
`


const CategoryLister = ({ category, challenges, onSelectChallenge }) => {

    const totalPoints = 0;

    return <CategoryContainer className="font-punk">
        <div className="px-2 py-1">
            <h2 className="mb-0">{category}</h2>
        </div>
        <div className="row mx-0">
            {challenges.map((c) =>
                <div key={shortid.generate()} className="col-6 p-2">
                    <ChallengeItem {...c} onClick={() => onSelectChallenge(c)} />
                </div>
            )}
        </div>
    </CategoryContainer>;
};


const ChallengesLister = ({ currentChallengeID, onSelectChallenge }) => {

    const [challenges, setChallenges] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchChallenges = () => {
        APIFetch({ query: challengesQuery }).then(({ success, data, errors}) => {
            if(success) {
                const challenges = data.challenges;
                setCategories(Object.entries(_.groupBy(challenges, 'categories')));
                setChallenges(challenges);
            }
        })
    };

    useEffect(fetchChallenges, []);

    return <div>
        {(categories?.length > 0)?
            <div>
                {categories.map((cat) =>
                    <CategoryLister
                        key={shortid.generate()}
                        category={cat[0]}
                        challenges={cat[1]}
                        currentChallengeID={currentChallengeID}
                        onSelectChallenge={onSelectChallenge}
                    />
                )}
            </div> :
            <div>
                <div>No Challenges found</div>
            </div>
        }
    </div>

};

export default ChallengesLister;