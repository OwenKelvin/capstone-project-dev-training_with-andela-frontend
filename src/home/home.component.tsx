import React from 'react';
import './home.component.css';
import logo from '../images/logo.png';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    return (
        <section>
            <header className="App-header">
                <img alt="Logo" src={logo} />
            </header>
            <div className="App-body">
            Welcome to TeamWork
            <ButtonToolbar>
                <Router>
                    <Link to="/login"><Button variant="outline-primary">Login</Button></Link>     
                </Router>
                
            </ButtonToolbar>
            </div>
        </section>
    );
};

export default App;
