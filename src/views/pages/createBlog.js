import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useMutation } from '@apollo/client';
import CREATEBLOG_MUTATION from '../../services/apollo/mutation/createBlog';
import { useNavigate } from 'react-router';

function create() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [Error, setError] = useState(null);
  const [Create] = useMutation(CREATEBLOG_MUTATION, {
    variables: { blogInput: { title, content } },
  });

  const handleRes = async (e) => {
    e.preventDefault();
    const { error, data } = await Create();
    if (error) {
      setError({
        isSuccess: false,
        message: error.message,
      });
      return;
    }
    console.log(data);
    if (!data.createBlogByUser.isSuccess) {
      setError({
        isSuccess: false,
        message: data.createBlogByUser.message,
      });
      return;
    }
    navigate('/');
  };

  return Error ? (
    <div>{Error.message}</div>
  ) : (
    <Card style={{ width: '18rem' }}>
      <Card.Title>CREATE BLOG</Card.Title>
      <Card.Body>
        <Form onSubmit={(e) => handleRes(e)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Content</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Create
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default create;
