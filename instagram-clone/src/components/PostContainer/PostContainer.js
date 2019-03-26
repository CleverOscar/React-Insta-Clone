import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  console.log(props);
    return(
      <div className="PostContainer">
        <div> </div>
        <CommentSection />
      </div>
    )
}

export default PostContainer;
