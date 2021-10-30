import React from "react";
import Quotes from "./components/Quotes";
import HabitsList from "./components/HabitsList";
import BottomNav from "./components/BottomNav";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNew from "./components/AddNew";
import LoginPage from "./components/LoginPage";

const Header = styled.h2`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: white;
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
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
