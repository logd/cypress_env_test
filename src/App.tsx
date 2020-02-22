import React from 'react';
import './App.css';
import { Switch,  Route  } from "react-router-dom";
import { TestingLogin } from './TestingLogin';

function App() {
  return (
    <div className="App" data-cy="homepage">
      <header>
header
      </header>
      <Switch>
      <Route path="/testing-login" component={TestingLogin} />
    </Switch>
    </div>
  );
}

export default App;
