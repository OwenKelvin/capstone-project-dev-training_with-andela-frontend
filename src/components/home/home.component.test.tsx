import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import HomeComponent from './home.component';
import React from 'react';

describe('LOGIN: ', () => {
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
        ReactDOM.render(<HomeComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
