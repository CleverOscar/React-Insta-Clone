import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'

import withAuthenticate from './components/Authentication/withAuthentication'

const ComponentFromWithAuthenticate = withAuthenticate(PostContainer);

class App extends Component {
  constructor(){
    super();
    this.state= {
      posts: dummyData,
      isLogin: false,
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  };

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate dummyData={this.state.posts} isLogin={this.state.isLogin}/>
      </div>
    );
  }
}

export default App;
