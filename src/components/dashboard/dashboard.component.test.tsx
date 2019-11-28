import ReactDOM from 'react-dom';
import DashboardComponent from './dashboard.component';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('HOME COMPONENT: ', () => {
  let div: HTMLElement;
  beforeAll(() => {
    div = document.createElement('div');
  })
  it('renders without crashing', done => {
    ReactDOM.render(<Provider store={store}><DashboardComponent store={store} /></Provider>, div);
    done();
  });
  afterAll(() => {
    // ReactDOM.unmountComponentAtNode(div);
  });
});
