import ReactDOM from 'react-dom';
import DashboardComponent from './dashboard.component';
import React from 'react';

describe('HOME COMPONENT: ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DashboardComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
