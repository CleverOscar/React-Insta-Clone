import React from 'react';
import LoginPage from '../LoginPage/LoginPage';


const withAuthenticate = App => {
  return class extends React.Component {
  render(){
        if(this.props.isLogin){
            return <App {...this.props}/>
        } else {
          return <LoginPage />
      }
    }
  }
}


export default withAuthenticate;
