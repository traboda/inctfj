import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
padding: 0.5rem;
border-radius: 25px;
background: transparent;
border: 1px solid orange;
margin: 3px;
font-size: 11px;
font-weight: 900;
text-align: left;
`;

const Container = styled.div`
display: flex;
align-items: flex-start;
flex-wrap: wrap;
`;

const EntryWidget = (props) => {

    const options = [
        {
            id: 1,
            text: "What is Capture The Flag ?",
            handler: props.actionProvider.handleInCTF,
        },
        {
            id: 2,
            text: "Do i need a laptop/pc to participate?",
            handler: props.actionProvider.handlePlay,
        },
        {
            id: 3,
            text: "What do I get if I win ?",
            handler: props.actionProvider.handleWin,
        }
    ]

    const Widget = options.map((options) => (
        <Button key={options.key} onClick={options.handler}>
            {options.text}
        </Button>
    ))

    return <Container>{Widget}</Container>
}

export default EntryWidget;
