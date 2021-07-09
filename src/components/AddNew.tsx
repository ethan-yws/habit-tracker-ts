import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import db from "../firebase";
import firebase from "firebase";

/* Styles */
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

/* Types */

// Options for form entries
const periodOptions: string[] = ["Daily", "Weekly", "Monthly", "Yearly"];
const periodConverter = (periodOption: string | null): string => {
    let res = "";
    switch (periodOption) {
        case "Daily":
            res = "Today";
            break;
        case "Weekly":
            res = "This Week";
            break;
        case "Monthly":
            res = "This Month";
            break;
        case "Yearly":
            res = "This Year";
            break;
        default:
            res = "Today";
    }
    return res;
};

// Options for color choice
const colorOptions: string[] = [
    "pink",
    "lightblue",
    "lightgreen",
    "salmon",
    "coral",
    "mediumpurple",
];

const AddNew: React.FC = () => {
    const [habitName, setHabitName] = useState("");
    const [habitPeriod, setHabitPeriod] = useState<string | null>(
        periodOptions[0]
    );

    const [habitGoal, setHabitGoal] = useState<string>("1");
    const [habitColor, setHabitColor] = useState<string | null>(
        colorOptions[0]
    );
    console.log(habitName, habitPeriod, habitGoal, habitColor);

    const hanldeAddNew = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        db.collection("habits").add({
            habit: {
                title: habitName,
                goalPeriod: periodConverter(habitPeriod),
                goalNumber: parseInt(habitGoal),
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
                    onChange={(event: any, newValue: string | null) => {
                        setHabitPeriod(newValue);
                    }}
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            required
                            label="Goal Period"
                            variant="outlined"
                            value={habitPeriod}
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
                    onChange={(e) => setHabitGoal(e.target.value)}
                />
                <Autocomplete
                    id="habit-color"
                    options={colorOptions}
                    style={{ width: 300 }}
                    onChange={(event: any, newValue: string | null) => {
                        setHabitColor(newValue);
                    }}
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            required
                            label="Pick a color"
                            variant="outlined"
                            value={habitColor}
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
                        <Link to="/" style={{ textDecoration: "none" }}>
                            Save
                        </Link>
                    </Button>
                </ButtonsWrapper>
            </Form>
        </div>
    );
};

export default AddNew;
