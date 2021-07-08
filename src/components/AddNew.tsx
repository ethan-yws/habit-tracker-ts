import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2em;
`;

const Header = styled.h2`
    text-align: center;
`;

const options = ["Daily", "Weekly", "Monthly", "Yearly"];

const AddNew = () => {
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState("");

    return (
        <div>
            <Header>Create New Habit</Header>
            <Form>
                <TextField required id="habit-title" label="Title" />
            </Form>
        </div>
    );
};

export default AddNew;
