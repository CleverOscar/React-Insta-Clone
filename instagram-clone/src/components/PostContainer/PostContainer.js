import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  console.log(props);
    return(
      <div>
        <div>
          {props.dummyData.map((posts, index) => (
            <div className="postContainer" key={index}>
              <div className="profileImg">
                <img src={posts.thumbnailUrl} className="thumbnailUrl"/>
                <p className="username">{posts.username}</p>
              </div>
              <div>
                <img className="imageUrl" src={posts.imageUrl} />
              </div>
              <CommentSection comments={posts.comments}/>
            </div>
          ))}
        </div>
      </div>
    )
}

export default PostContainer;
