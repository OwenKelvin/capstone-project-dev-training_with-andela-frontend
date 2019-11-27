import ReactDOM from 'react-dom';
import AdminComponent from './admin.component';
import React from 'react';

describe('ADMIN COMPONENT: ', () => {
    it('renders without crashing', (done) => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminComponent store />, div);
        ReactDOM.unmountComponentAtNode(div);
        done();
    });
});
