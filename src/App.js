import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";


import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/">
       
            </Route>
          </Switch>
        </AppBody>
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;