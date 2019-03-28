import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer';


function PostPage = props => {
  render(){
    return(
        <div>
        <SearchBar />

        <PostContainer /*dummyData={this.state.posts}*/ />
        </div>
    )
  }
}

export default PostPage;
