import ReactDOM from 'react-dom';
import DashboardComponent from './dashboard.component';
import React from 'react';

describe('HOME COMPONENT: ', () => {
  let div: HTMLElement;
  beforeAll(() => {
    div = document.createElement('div');
  })
  it('renders without crashing', done => {
    ReactDOM.render(<DashboardComponent />, div);
    done();
  });
  afterAll(() => {
    // ReactDOM.unmountComponentAtNode(div);
  });
});
