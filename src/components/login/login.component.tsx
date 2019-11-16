import React from 'react';
import './login.component.css';
import logo from '../../images/logo.png';
import { Button } from 'react-bootstrap';

const LoginComponent = () => {
    return (
        <main className="App">
            <section className="col-lg-4">
                <img alt="Logo" src={logo} />
                LOGIN PAGE
                <Button>Login</Button>
            </section>
        </main>
    );
};

export default LoginComponent;
