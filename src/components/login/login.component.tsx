import React, { Component, SyntheticEvent } from 'react';
import './login.component.css';
import logo from '../../images/logo.png';
import AuthService from '../../services/auth.service';
import { Redirect } from "react-router-dom";

interface IState {
  username: string, password: string, toDashboard?: boolean, loginError?: string
};

class LoginComponent extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: 'admin@admin.com',
      password: 'password',
      toDashboard: false
    }
    // Bindings
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsernameChange(event: any) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event: any) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const email = this.state.username;
    const password = this.state.password;
    AuthService.authenticate({ email, password }).then((res) => {
      if (window) {
        if (res.data && res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data));
          this.setState({ toDashboard: true })
        } else {
          this.setState({ loginError: 'Invalid Username or Password' });
        }
      }

    });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <main className='top-10-pcnt'>
        <section className='d-flex justify-content-center flex-wrap'>
          <section className='d-none d-sm-block col-sm-4 col-lg-4'>
            <img alt='Logo' className='img-fluid' src={logo} />
          </section>
          <section className='col-sm-8 col-md-7 col-lg-6'>
            <form className='card' onSubmit={this.handleSubmit}>
              <h1 className='card-heading'>
                <img alt='Logo' className='img-fluid  d-xs-block d-sm-none' src={logo} /> Login
              </h1>
              <section className='card-body'>
                <section className='form-group d-flex flex-wrap'>
                  <label className='col-sm-12 col-lg-4' htmlFor='username'>Username</label>
                  <section className='col-sm-12 col-lg-8'>
                    <input onChange={this.handleUsernameChange} value={this.state.username} className='form-control' id='username' type='email' required />
                  </section>
                </section>
                <section className='form-group d-flex flex-wrap'>
                  <label className='col-sm-12 col-lg-4' htmlFor='password'>Password</label>
                  <section className='col-sm-12 col-lg-8'>
                    <input onChange={this.handlePasswordChange} value={this.state.password} className='form-control' id='password' type='password' required />
                  </section>
                </section>
                <section className='d-flex justify-content-end'>
                  <button className='btn btn-primary'>
                    submit
                </button>
                </section>
                {this.state.loginError && (
                  <section className='alert alert-danger'>
                    {this.state.loginError}
                  </section>
                )}
              </section>
            </form>
          </section>
        </section>
      </main>
    );
  }
};

export default LoginComponent;
