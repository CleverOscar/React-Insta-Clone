import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  console.log(props);
    return(
      <>{props.cards.map(posts =>(
        <div>
          <p> {posts.username} </p>
        </div>

      ))}
      </>
    )
}

export default PostContainer;
