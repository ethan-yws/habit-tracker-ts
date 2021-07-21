import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import db from "../firebase";
import { useLongPress, LongPressDetectEvents } from "use-long-press";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";

/* Styles */
const Wrapper = styled.div<{ ref: any }>`
    display: flex;
    justify-content: space-between;
    margin-left: 1em;
    margin-right: 1em;
`;

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
    width: 275px;
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

/* Types */
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

    // Tap to add one more time
    const handleClick = () => {
        setDoneCounter((prev) => prev + 1);
        db.collection("habits")
            .doc(id)
            .set(
                {
                    habit: {
                        doneCounter: doneCounter + 1,
                    },
                },
                { merge: true }
            );
    };

    /*--------  Long Press Logic ---------*/
    const elRef = useRef<HTMLDivElement>();
    const callback = useCallback(() => {
        const divEl = elRef.current;
    }, []);
    const bind = useLongPress(callback, {
        onStart: () => console.log("Press started"),
        onFinish: () => console.log("Long press finished"),
        onCancel: () => console.log("Press cancelled"),
        //onMove: () => console.log("Detected mouse or touch movement"),
        threshold: 500,
        captureEvent: true,
        cancelOnMovement: false,
        detect: LongPressDetectEvents.BOTH,
    });

    return (
        <Wrapper ref={elRef}>
            <IconButton>
                <RemoveIcon />
            </IconButton>
            <HabitWrapper
                {...bind}
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
            <IconButton>
                <ClearIcon />
            </IconButton>
        </Wrapper>
    );
};

export default SingleHabit;
