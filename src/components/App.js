import React from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentsList';

export default () => {
  return (
    <div>
      I'm the App Component
      <CommentBox />
      <CommentList />
    </div>
  );
};
