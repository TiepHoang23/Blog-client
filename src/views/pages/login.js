import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import handleSubmitform from '../../services/functions/login';
function login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleRes = async (e) => {
    e.preventDefault();
    const myIntput = { username, password };
    const data = await handleSubmitform(myIntput);
    console.log(data);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Form onSubmit={(e) => handleRes(e)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default login;
