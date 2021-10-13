import React from "react";
import styled from "@emotion/styled";

const PostCardWrapper = styled.a`
    display: block;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 10px;
    text-decoration: none!important;
    height: 100%;
    h4 {
       font-weight: 600;
       margin-bottom: 8px;
    }
    div {
       font-size: 10px;
       margin: 5px 0;
    }
    &:hover {
      border-color: #fd7e14;
      h4 {
        color: #fd7e14;
      }
    }
`

const WriteUpCard = ({ title, id, category, difficulty }) => {

    return <PostCardWrapper href={`/writeup/${id}`}>
        <h4>{title}</h4>
        <div>
            <span><i className="far fa-fire" /> {difficulty}</span>
            <span className="px-1">|</span>
            <span><i className="far fa-album-collection" /> {category}</span>
        </div>
    </PostCardWrapper>
};

export default WriteUpCard;