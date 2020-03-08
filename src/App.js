import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import LoginContextContainer from './contexts/LoginContextContainer.js';
import Login from './pages/login';
import Routes from './routes.js';
import './App.css';

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
