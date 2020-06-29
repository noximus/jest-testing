import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // console.log(div.innerHTML);
  // Look inside the div
  // and checks to se if the CommentBox is in there
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);
});
