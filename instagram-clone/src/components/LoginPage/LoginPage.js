import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
  border-radius: 20px;
  height: 400px;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0px 5px 15px black;
  text-align: center;
  background-color: rgba(224, 224, 224,0.4);
`;

const H1 = styled.h1`
  font-family: cursive;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-top: 10px;
  border: 1px solid red;
  padding: 5px;
`;

const Button = styled.button`
  margin-top: 10px;
  height: 20px;
`;

let username = "";
let password = "";

const getUser = (event) => {
  username = event.target.value;
}

const getPwd = (event) => {
  password = event.target.value;
}

function onLogin(){
  localStorage.setItem("username", username);
  localStorage.setItem("password",password);
}

function LoginPage(props){
  return <Div>
          <H1> Please login </H1>
          <Form onSubmit={onLogin} >
            <Input type="text" onChange={getUser} placeholder="Username"/>
            <Input type="password" onChange={getPwd} placeholder="Password"/>
            <Button type="submit" value="submit">Login</Button>
          </Form>
        </Div>
}

export default LoginPage;
