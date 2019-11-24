import ReactDOM from 'react-dom';
import ViewArticleComponent from './view-article.component';
import React from 'react';

describe('VIEW ARTICLE COMPONENT: ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ViewArticleComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
