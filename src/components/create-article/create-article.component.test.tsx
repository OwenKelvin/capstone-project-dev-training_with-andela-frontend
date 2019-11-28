import ReactDOM from 'react-dom';
import CreateArticleComponent from './create-article.component';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureMockStore();
const store = mockStore({});

describe('CREATE ARTICLE COMPONENT: ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><CreateArticleComponent store={store} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});