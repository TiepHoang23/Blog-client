import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import CREATEBLOG_MUTATION from '../../../services/apollo/mutation/createBlog';
import './NewPostForm.css';

const NewPostForm = () => {
  const navigate = useNavigate();
  // Post data
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [Create] = useMutation(CREATEBLOG_MUTATION, {
    variables: { blogInput: { title, content } },
  });

  // Create post
  const handleCreatePost = async (e) => {
    e.preventDefault();
    const { error, data } = await Create();
    if (error) {
      toast.error('Create new post fail!');

      return;
    }
    console.log(data);
    if (!data.createBlogByUser.isSuccess) {
      toast.error('Create new post fail!');
      return;
    }
    navigate('/');
    toast.success('Create new post success!');
  };

  return (
    <div className='post-container'>
      <form className='login-form' onSubmit={handleCreatePost}>
        <h2 className='login-title'>Create a new post</h2>

        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input
          type='text'
          name='title'
          className='form-input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label htmlFor='content' className='form-label'>
          Content
        </label>
        <textarea
          rows='10'
          name='content'
          className='form-input'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button className='button' type='submit'>
          Create post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
