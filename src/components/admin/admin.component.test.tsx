import ReactDOM from 'react-dom';
import AdminComponent from './admin.component';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('ADMIN COMPONENT: ', () => {
  it('renders without crashing', (done) => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><AdminComponent store={store} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
    done();
  });
});
