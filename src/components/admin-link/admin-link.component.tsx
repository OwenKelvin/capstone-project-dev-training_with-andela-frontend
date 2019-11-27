import { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AdminLinkComponent extends Component<{store: any}, {}> {
  constructor (props: { store: any}) {
    super(props);
    this.handleAdminLinkClick = this.handleAdminLinkClick.bind(this);
  }
  handleAdminLinkClick(dispatch: any) {
    // dispatch({type: 'NAVIGATION_CHANGE', payload: 'admin'})
  }
  render() {
    return (<div className='collapse navbar-collapse justify-content-start' id='collapsibleNavbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Router>
            {/* <Link onClick={this.handleAdminLinkClick} className='nav-link' to='/admin'>Admin</Link> */}
            <a onClick={this.handleAdminLinkClick} className='nav-link' href='/admin'>Admin</a>
          </Router>

        </li>
      </ul>
    </div>)
  }
};


export default connect()(AdminLinkComponent);

//export default AdminLinkComponent;