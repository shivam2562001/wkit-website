import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import StartContainer from '../Start';
import AboutContainer from '../About';

function App() {
  return (
    <div className="App">
      <div className="content" id="app-content">
        <Switch>
          <Route exact path="/" component={ StartContainer } />
          <Route path="/about" component={ AboutContainer } />
        </Switch>
      </div>
    </div>
  );
}

export default App;