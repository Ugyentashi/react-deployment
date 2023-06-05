import React from 'react';
import styles from './SignIn.module.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0051a6;
  }
`;

const SignIn = () => {
  return (
    <Container>
      <h2>Sign In</h2>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
