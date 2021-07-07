import React from "react";
import Quotes from "./components/Quotes";
import HabitsList from "./components/HabitsList";
import BottomNav from "./components/BottomNav";
import styled from "styled-components";

const Header = styled.h2`
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
`;

function App() {
    return (
        <div className="App">
            <Header>Today</Header>
            <Quotes />
            <HabitsList />
            <BottomNav />
        </div>
    );
}

export default App;
