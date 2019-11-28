import ReactDOM from 'react-dom';
import AdminLinkComponent from './admin-link.component';
import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('ADMIN LINK COMPONENT: ', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Provider store={store}><AdminLinkComponent store={store} /></Provider>, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
