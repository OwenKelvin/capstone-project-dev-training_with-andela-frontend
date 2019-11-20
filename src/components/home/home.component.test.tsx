import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import HomeComponent from './home.component';
import React from 'react';

describe('HOME COMPONENT: ', () => {
    it('renders without crashing', (done) => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
        done();
    });
});
