import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './home/home.component';
import LoginComponent from './login/login.component';
import DashboardComponent from './dashboard/dashboard.component';

const App = () => {
  return (
    <main className='App'>
      <Router>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/login' component={LoginComponent} />
        <Route exact path='/dashboard' component={DashboardComponent} />
      </Router>
    </main>
  );
};

export default App;
