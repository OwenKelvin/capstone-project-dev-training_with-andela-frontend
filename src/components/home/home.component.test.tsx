import ReactDOM from 'react-dom';
import HomeComponent from './home.component';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('HOME COMPONENT: ', () => {
    it('renders without crashing', (done) => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><HomeComponent store={store} /></Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
        done();
    });
});
