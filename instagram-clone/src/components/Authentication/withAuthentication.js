import React from 'react';


const withAuthenticate = App => {
  return class extends React.Component {
  render(){
        if(this.props.isLogin === true){
            return <App {...this.props}/>
        } else {
          return <div> Please login</div>
      }
    }
  }
}


export default withAuthenticate;
