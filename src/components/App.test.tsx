import React from 'react';
import ReactDOM, { unmountComponentAtNode, render } from 'react-dom';
import App from './App';
import { act } from 'react-dom/test-utils';
import { register } from '../serviceWorker';

describe('APP: ', () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement('div');
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
    expect(container.textContent).toContain('Login');
  });
  describe('Service Worker', () => {
    let config;
    let buildFail = false;
    beforeEach(() => {
      buildFail = false;
    });
    it('renders when config is null', () => {
      config = null;
      try {
        register(config);
      } catch (error) {
        buildFail = true;
      }
      expect(buildFail).toBe(false);
     });
    it('renders when config is empty', () => {
      try {
        register({});
      } catch (error) {
        buildFail = true;
      }
      expect(buildFail).toBe(false);
     });
    it('renders when config is has an onUpdate | onSuccess function', () => {
      try {
        register({ onUpdate: () => { return; } });
      } catch (error) {
        buildFail = true;
      }
      expect(buildFail).toBe(false);
      try {
        register({ onSuccess: () => { return; } });
      } catch (error) {
        buildFail = true;
      }
      expect(buildFail).toBe(false);
     });
    
  });
});
