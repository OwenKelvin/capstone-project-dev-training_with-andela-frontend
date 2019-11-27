import ReactDOM from 'react-dom';
import CreateArticleComponent from './create-article.component';
import React from 'react';

describe('CREATE ARTICLE COMPONENT: ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreateArticleComponent store />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});