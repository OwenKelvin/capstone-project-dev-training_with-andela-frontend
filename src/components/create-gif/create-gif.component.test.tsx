import ReactDOM from 'react-dom';
import CreateGifComponent from './create-gif.component';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('FOOTER COMPONENT: ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><CreateGifComponent  store={store} /></Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
