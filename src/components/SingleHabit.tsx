import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ counter: number }>`
    background-color: ${(props) =>
        props.counter === 0
            ? "lightgrey"
            : props.counter === 1
            ? "yellow"
            : "lightgreen"};
    border-radius: 0.2em;
    width: 300px;
    height: 70px;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
`;

interface HabitProp {
    title: string;
    doneCounter: number;
}

const SingleHabit: React.FC<HabitProp> = ({
    title,
    doneCounter: completedCounter,
}) => {
    const [doneCounter, setDoneCounter] = useState(completedCounter);

    const handleClick = () => {
        setDoneCounter((prev) => prev + 1);
    };

    return (
        <Wrapper counter={doneCounter} onClick={handleClick}>
            <span>{title}</span>
            {doneCounter}
        </Wrapper>
    );
};

export default SingleHabit;
