import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
  return <div className="commentSection">
          {props.comments.map((comment,index) => (
            <div className="comments" key="index">
              <p>{comment.username}</p>
              <p>{comment.text}</p>
            </div>
          ))}
          <form className="commentForm">
            <input className="commentInput" placeholder="Add a comment..." />
            <div className="more"> </div>
          </form>
        </div>
}

export default CommentSection;
