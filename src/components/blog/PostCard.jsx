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
       color: white;
       font-weight: 600;
       margin-bottom: 8px;
    }
    div {
       color: #999;
       font-size: 10px;
       margin: 5px 0;
    }
    p {
      font-size: 12px;
      color: #AAA;
      margin-bottom: 0;
    }
    &:hover {
      border-color: #fd7e14;
      h4 {
        color: #fd7e14;
      }
    }
`

const PostCard = ({
    title, date, slug, category, tags, description,
}) => {

    return <PostCardWrapper href={`/posts/${slug}`}>
        <h4>{title}</h4>
        <div>
            <i className="far fa-calendar" /> {date?.toDateString()}
            <span className="px-1">|</span>
            <span><i className="far fa-album-collection" /> {category}</span>
            <span className="px-1">|</span>
            <span><i className="far fa-tags" /> {tags}</span>
        </div>
        <p>{description}</p>
    </PostCardWrapper>
};

export default PostCard;