import ReactDOM from 'react-dom';
import CreateGifComponent from './create-gif.component';
import React from 'react';

describe('FOOTER COMPONENT: ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CreateGifComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
