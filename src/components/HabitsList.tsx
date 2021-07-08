import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleHabit from "./SingleHabit";
import db from "../firebase";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`;

interface Habit {
    id: string;
    habit: {
        title: string;
        doneCounter: number;
        goalNumber: number;
        goalPeriod: string;
        color: string;
    };
}

const HabitsList: React.FC = () => {
    const [habits, setHabits] = useState<Habit[]>([]);
    console.log(habits);

    useEffect(() => {
        db.collection("habits")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot: any) => {
                setHabits(
                    snapshot.docs.map((doc: any) => ({
                        id: doc.id,
                        habit: doc.data().habit,
                    }))
                );
            });
    }, []);

    return (
        <Wrapper>
            {habits.map((habit) => (
                <SingleHabit
                    key={habit.id}
                    id={habit.id}
                    title={habit.habit.title}
                    doneCounter={habit.habit.doneCounter}
                    goalNumber={habit.habit.goalNumber}
                    goalPeriod={habit.habit.goalPeriod}
                    color={habit.habit.color}
                />
            ))}
        </Wrapper>
    );
};

export default HabitsList;
