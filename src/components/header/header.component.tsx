import React, { Component } from 'react';
import './header.component.css';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import AdminLinkComponent from '../admin-link/admin-link.component';
import AuthService from '../../services/auth.service';
import { connect } from 'react-redux';

interface IUser {
  isAdmin?: boolean,
  email?: string
};

class HeaderComponent extends Component<{store: any}, { user: IUser }> {
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
                {/* <Link className='nav-link' to='/dashboard'>Home</Link> */}
                 <a className='nav-link' href='/dashboard'>Home</a>
              </li>
            </ul>
            {this.state.user.isAdmin ? <AdminLinkComponent store={this.props.store} /> : ''}
            <section className='justify-content-start'>you are logged is as {this.state.user.email} <button className='btn btn-sm btn-danger'> Logout</button></section>
          </nav>
        </Router>
      </header>
    );
  }
  componentDidUpdate(prevProps: any) {
    // if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
    //   const { dispatch, selectedSubreddit } = this.props
    //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
    // }
  }
};

const mapStateToProps = (state: any) => {
  return {};
}

export default connect(mapStateToProps)(HeaderComponent);
