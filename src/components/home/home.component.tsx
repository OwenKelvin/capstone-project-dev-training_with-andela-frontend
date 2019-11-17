import React, { Component } from 'react';
import './home.component.css';
import logo from '../../images/logo.png';
import { ButtonToolbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <section>
        <header className='App-header'>
          <img alt='Logo' src={logo} />
        </header>
        <div className='App-body'>
          Welcome to TeamWork
        <ButtonToolbar>
            <Router>
              <a href='/login'>
                <button type='button' className='btn btn-outline-primary'>Login</button>
              </a>
            </Router>

          </ButtonToolbar>
        </div>
      </section>
    );
  }
};

export default App;
