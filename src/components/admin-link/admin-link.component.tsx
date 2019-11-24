import { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class AdminLinkComponent extends Component {
  render() {
    return (<div className='collapse navbar-collapse justify-content-end' id='collapsibleNavbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Router>
            <Link className='nav-link' to='/admin'>Admin</Link>
          </Router>

        </li>
      </ul>
    </div>)
  }
};

export default AdminLinkComponent;