import React, { Component } from 'react';
import './header.component.css';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import AdminLinkComponent from '../admin-link/admin-link.component';
import AuthService from '../../services/auth.service';
interface IUser {
  isAdmin?: boolean,
  email?: string
};


class HeaderComponent extends Component<{}, { user: IUser }> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: { isAdmin: false }
    };
  }
  componentDidMount() {
    AuthService.loggedInUser().then((res) => {
      this.setState({ user: res.data });
    }).catch(() => { })
  }
  render() {
    return (
      <header>
        <Router>

          <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
            <NavLink className='navbar-brand' to='/dashboard' >
              <img className='header-img img-fluid' width='40' src={logo} alt='LOGO' />
              TeamWork
          </NavLink>

            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/dashboard'>Home</Link>
              </li>
            </ul>
            {this.state.user.isAdmin ? <AdminLinkComponent /> : ''}
            <section className='justify-content-start'>you are logged is as {this.state.user.email} <button className='btn btn-sm btn-danger'> Logout</button></section>
          </nav>
        </Router>
      </header>
    );
  }
};

export default HeaderComponent;
