import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
  
      <Router>
        <>
        <Switch>
          <Route path="/">
            <h1>This is the homepage</h1>
          </Route>
        </Switch>
        </>
    </Router>

  );
}

export default App;
