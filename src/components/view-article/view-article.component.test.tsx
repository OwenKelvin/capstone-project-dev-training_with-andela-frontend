import ReactDOM from 'react-dom';
import ViewArticleComponent from './view-article.component';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('VIEW ARTICLE COMPONENT: ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ViewArticleComponent store={store} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
