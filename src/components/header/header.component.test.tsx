import ReactDOM from 'react-dom';
import HeaderComponent from './header.component';
import React from 'react';

describe('HEADER COMPONENT: ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HeaderComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
