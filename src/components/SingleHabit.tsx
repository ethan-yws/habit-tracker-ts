import React, { useState } from "react";
import styled from "styled-components";

const HabitWrapper = styled.div<{ counter: number }>`
    /* background-color: ${(props) =>
        props.counter === 0
            ? "lightgrey"
            : props.counter === 1
            ? "yellow"
            : "lightgreen"}; */
    background: linear-gradient(
        to right,
        lightgreen ${(props) => (props.counter / 10) * 100}%,
        lightgray 0%
    );
    border-radius: 0.8em;
    width: 300px;
    height: 70px;
    /* max-width: 500px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
`;

interface HabitProp {
    id: string;
    title: string;
    doneCounter: number;
}

const SingleHabit: React.FC<HabitProp> = ({
    id,
    title,
    doneCounter: completedCounter,
}) => {
    const [doneCounter, setDoneCounter] = useState(completedCounter);

    const handleClick = () => {
        setDoneCounter((prev) => prev + 1);
    };

    return (
        <HabitWrapper counter={doneCounter} onClick={handleClick}>
            <span>{title}</span>
            {doneCounter}
        </HabitWrapper>
    );
};

export default SingleHabit;
