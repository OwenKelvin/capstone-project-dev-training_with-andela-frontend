import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import LoginComponent from './login.component';
import React from 'react';

describe('LOGIN COMPONENT: ', () => {
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
        ReactDOM.render(<LoginComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it.skip('renders button with text "login"', () => {
        // Check if button exists
    });
});
