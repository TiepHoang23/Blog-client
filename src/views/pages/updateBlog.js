import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import UPDATEBLOG_MUTATION from '../../services/apollo/mutation/updateBlog';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function update({ data }) {
  const navigate = useNavigate();
  // const toast =
  const { title, content, id } = data.getBlogById;
  const [Title, setTitle] = useState();
  const [Content, setContent] = useState();
  const [Error, setError] = useState(null);

  const [Update] = useMutation(UPDATEBLOG_MUTATION, {
    variables: { blogId: id, blogInput: { title: Title, content: Content } },
  });

  const handleUpdatePost = async (e) => {
    e.preventDefault();

    const { error, data } = await Update();
    if (error) {
      toast.error('error update');

      return;
    }
    if (data.updateBlogByUser.isSuccess === 'false') {
      toast.error(`error update:${data.updateBlogByUser.message}`);

      return;
    }
    navigate(0);
    toast.success('update success');

    // toast.success('update success');
  };

  return Error ? (
    <div>{Error.message}</div>
  ) : (
    <div className='post-container'>
      <form className='login-form' onSubmit={handleUpdatePost}>
        <h2 className='login-title'>Update Post</h2>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input
          type='text'
          name='title'
          className='form-input'
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label htmlFor='content' className='form-label'>
          Content
        </label>
        <textarea
          rows='10'
          name='content'
          className='form-input'
          placeholder={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button className='button' type='submit'>
          Save
        </button>
      </form>
    </div>
  );
}

export default update;
