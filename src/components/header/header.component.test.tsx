import ReactDOM from 'react-dom';
import HeaderComponent from './header.component';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('HEADER COMPONENT: ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><HeaderComponent store={store} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
