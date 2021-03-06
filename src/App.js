import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import LoginContextContainer from './contexts/LoginContextContainer.js';
import Routes from 'routes.js';
import 'App.scss';

function App() {
  return (
    <Router>
      <LoginContextContainer>
        <Routes />
      </LoginContextContainer>
    </Router>
  );
}

export default App;
