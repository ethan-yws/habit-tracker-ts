import React from "react";
import Quotes from "./components/Quotes";
import HabitsList from "./components/HabitsList";
import BottomNav from "./components/BottomNav";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNew from "./components/AddNew";

const Header = styled.h2`
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
`;

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* Home Page */}
                    <Route exact path="/">
                        <Header>Today</Header>
                        <Quotes />
                        <HabitsList />
                        <BottomNav />
                    </Route>

                    {/* Register new habit Page */}
                    <Route exact path="/addNew" component={AddNew} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
