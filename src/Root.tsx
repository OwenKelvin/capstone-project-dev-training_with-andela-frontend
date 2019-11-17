import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './components/App';

const Root = ({ store }: {store: any}): any => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
