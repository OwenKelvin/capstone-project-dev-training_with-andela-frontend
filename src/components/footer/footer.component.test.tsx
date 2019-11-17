import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import FooterComponent from './footer.component';
import React from 'react';

describe('FOOTER COMPONENT: ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FooterComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
