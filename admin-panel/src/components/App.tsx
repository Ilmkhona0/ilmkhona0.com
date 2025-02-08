import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'; // Adjusted path
import MyAppBar from './AppBar'; // Adjusted path

const App = () => {
  return (
    <Router>
      <div>
        <MyAppBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;