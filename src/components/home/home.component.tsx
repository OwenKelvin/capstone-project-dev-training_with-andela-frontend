import React, { Component } from 'react';
import './home.component.css';
import logo from '../../images/logo.png';
import { ButtonToolbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginComponent from '../login/login.component';

class App extends Component<{}, { viewLogin: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      viewLogin: false
    };
    this.handleGoLogin = this.handleGoLogin.bind(this);
  }
  handleGoLogin() {
    this.setState({ viewLogin: true });
  }
  render() {
    if (this.state.viewLogin) {
      return (<LoginComponent />);
    }
    return (
      <section>
        <header className='App-header'>
          <img alt='Logo' src={logo} />
        </header>
        <div className='App-body'>
          Welcome to TeamWork
        <ButtonToolbar>
            <Router>
              <Link to='/login'>
                <button onClick={this.handleGoLogin} type='button' className='btn btn-outline-primary'>
                  Login</button>
              </Link>
            </Router>
          </ButtonToolbar>
        </div>
      </section>
    );
  }
}

export default App;
