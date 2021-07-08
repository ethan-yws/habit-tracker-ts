import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import db from "../firebase";
import firebase from "firebase";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 1em;
    gap: 2em;
`;

const Header = styled.h2`
    text-align: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px;
`;

const periodOptions: string[] = ["Daily", "Weekly", "Monthly", "Yearly"];
const colorOptions: string[] = [
    "pink",
    "lightblue",
    "lightgreen",
    "salmon",
    "coral",
    "yellow",
];

const AddNew: React.FC = () => {
    const [habitName, setHabitName] = useState("");
    const [habitPeriod, setHabitPeriod] = useState("");
    const [habitGoal, setHabitGoal] = useState(1);
    const [habitColor, setHabitColor] = useState("lightgreen");

    const hanldeAddNew = (e: any) => {
        e.preventDefault();
        db.collection("habits").add({
            habit: {
                title: habitName,
                goalPeriod: habitPeriod,
                goalNumber: habitGoal,
                color: habitColor,
                doneCounter: 0,
            },
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };

    return (
        <div>
            <Header>Create New Habit</Header>
            <Form>
                <TextField
                    required
                    id="habit-name"
                    label="Habit Name"
                    variant="outlined"
                    style={{ width: 300 }}
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                />
                <Autocomplete
                    id="habit-goal-period"
                    options={periodOptions}
                    style={{ width: 300 }}
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            required
                            label="Goal Period"
                            variant="outlined"
                            value={habitPeriod}
                            onChange={(e) => setHabitPeriod(e.target.value)}
                        />
                    )}
                />
                <TextField
                    required
                    id="habit-goal"
                    label="Set your goal (Number)"
                    variant="outlined"
                    style={{ width: 300 }}
                    value={habitGoal}
                    onChange={(e) => setHabitGoal(parseInt(e.target.value))}
                />
                <Autocomplete
                    id="habit-color"
                    options={colorOptions}
                    style={{ width: 300 }}
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            required
                            label="Pick a color"
                            variant="outlined"
                            value={habitColor}
                            onChange={(e) => setHabitColor(e.target.value)}
                        />
                    )}
                />
                <ButtonsWrapper>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            style={{ width: 80 }}
                        >
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        style={{ width: 80 }}
                        onClick={hanldeAddNew}
                    >
                        Save
                    </Button>
                </ButtonsWrapper>
            </Form>
        </div>
    );
};

export default AddNew;
