import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
padding: 10px 0px;
`;

const Para = styled.p`
margin: 0px 10px;
background-color: white;
font-size: 1em;
padding: 5px 10px;
border-radius: 5px;
`;

const Details = styled.p`
font-size: 0.9em;
padding: 5px 10px;
border-radius: 5px;
margin: 10px 10px;
background-color: white;
`;

const Link = styled.a`
font-size: 0.9em;
margin: 15px 10px;
padding: 5px 5px;
background-color: #0d6efd;
color: white;
border-radius: 10px;
`;

const Text = (props) => {

    const [showDetails, setShow] = useState(false);

    const handleClick = () => {
        setShow(!showDetails);
        props.scroll();
    }

    return (
        <Container>
        <Para onClick={handleClick}>{props.question.question}</Para>
        {showDetails &&
        <>
            <Details>
                {props.question.response[0]}
            </Details>
            <Link href={"faq?q="+props.question.question}>Read more...</Link>
        </>}
        </Container>
    );
}

export default Text;