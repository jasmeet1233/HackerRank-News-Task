import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import SingleNews from './SingleNews';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id">
          <SingleNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
