import React from "react";
import styled from '@emotion/styled';
import Text from './Text.jsx';

const Container = styled.div`
background-color: #ff3d00;
min-height: 60px;
width: 100%;
border-radius: 10px;
overflow: hidden;
`;

const Questions = (props) => {
    return (
        <Container>
            {props.questions.map(q => (
                <div>
                    <Text question={q} scroll={props.scrollIntoView}/>
                </div>
            ))}
        </Container>
    )
}

export default Questions;