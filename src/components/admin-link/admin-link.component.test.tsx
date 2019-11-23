import ReactDOM from 'react-dom';
import AdminLinkComponent from './admin-link.component';
import React from 'react';

describe('ADMIN LINK COMPONENT: ', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AdminLinkComponent />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
