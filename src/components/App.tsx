import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './home/home.component';
import LoginComponent from './login/login.component';

const App = () => {
  return (
    <main className='App'>
      <Router>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/login' component={LoginComponent} />
      </Router>
    </main>
  );
};

export default App;
