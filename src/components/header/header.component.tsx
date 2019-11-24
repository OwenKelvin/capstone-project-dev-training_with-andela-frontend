import React from 'react';
import './header.component.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import AdminLinkComponent from '../admin-link/admin-link.component';

const HeaderComponent = () => {
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
          <AdminLinkComponent />
        </nav>
      </Router>
    </header>
  );
};

export default HeaderComponent;
