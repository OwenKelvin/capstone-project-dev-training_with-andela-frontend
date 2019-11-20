import React from 'react';
import './header.component.css';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png';

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
          <div className='collapse navbar-collapse justify-content-end' id='collapsibleNavbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/admin'>Admin</Link>
              </li>
            </ul>
          </div>
        </nav>
      </Router>
    </header>
  );
};

export default HeaderComponent;
