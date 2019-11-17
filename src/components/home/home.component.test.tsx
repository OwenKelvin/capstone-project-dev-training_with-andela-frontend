import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import HomeComponent from './home.component';
import React from 'react';

describe('HOME COMPONENT: ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
