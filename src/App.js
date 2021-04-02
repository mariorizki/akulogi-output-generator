import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Form from './components/Form';
import Output from './components/Output';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />

        <Route path="/output" component={Output} />
      </Switch>
    </Router>
  );
}

export default App;
