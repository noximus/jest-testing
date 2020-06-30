import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('enzyme shallow render test', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('enzyme shallow render the Comment List', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
