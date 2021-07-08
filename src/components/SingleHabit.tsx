import React, { useState } from "react";
import styled from "styled-components";

const HabitWrapper = styled.div<{
    counter: number;
    goalNum: number;
    color: string;
}>`
    background: linear-gradient(
        to right,
        ${(props) => props.color}
            ${(props) => (props.counter / props.goalNum) * 100}%,
        lightgray 0%
    );
    border-radius: 0.8em;
    width: 300px;
    height: 70px;
    /* max-width: 500px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 1.5em 1em 1.5em;
`;

const DoneCounter = styled.span`
    font-size: 1.4em;
`;

const HabitName = styled.span`
    letter-spacing: 0.05em;
    font-size: 1.2em;
    font-weight: 500;
    text-transform: uppercase;
`;

const GoalStatus = styled.span`
    color: white;
    font-weight: 500;
`;

interface HabitProp {
    id: string;
    title: string;
    doneCounter: number;
    goalNumber: number;
    goalPeriod: string;
    color: string;
}

const SingleHabit: React.FC<HabitProp> = ({
    id,
    title,
    doneCounter: completedCounter,
    goalNumber = 1,
    goalPeriod = "Today",
    color = "lightgreen",
}) => {
    const [doneCounter, setDoneCounter] = useState(completedCounter);

    const handleClick = () => {
        setDoneCounter((prev) => prev + 1);
    };

    return (
        <HabitWrapper
            counter={doneCounter}
            goalNum={goalNumber}
            color={color}
            onClick={handleClick}
        >
            <div>
                <HabitName>{title}</HabitName>
                <br />
                <br />
                <GoalStatus>
                    {goalPeriod}: {doneCounter} / {goalNumber}
                </GoalStatus>
            </div>
            <DoneCounter>{doneCounter}</DoneCounter>
        </HabitWrapper>
    );
};

export default SingleHabit;
