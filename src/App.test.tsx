import React from 'react';
import ReactDOM, { unmountComponentAtNode, render } from 'react-dom';
import App from './App';
import { act } from "react-dom/test-utils";

describe('APP: ', () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('has a button with content login', () => {
    act(() => {
      render(<App />, container);
    });
    expect(container.textContent).toContain("Login");
  });
});
