import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import FooterComponent from './footer.component';
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
        ReactDOM.render(<FooterComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
