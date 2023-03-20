import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';
import GETBLOGBYID_QUERY from '../../services/apollo/queries/getBlogById';
import { useQuery } from '@apollo/client';
import QueryResult from '../components/query-result';
import Update from './updateBlog';
import PostContent from '../components/PostContent/PostContent';
const BlogDetail = () => {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem('token');
  const { id } = useParams();

  const { loading, error, data } = useQuery(GETBLOGBYID_QUERY, {
    variables: { blogId: id },
  });

  return (
    <BlogDetails>
      <QueryResult error={error} loading={loading} data={data}>
        {token && <button onClick={() => setShow(!show)}>Update</button>}
        {show === true && <Update data={data} blogId={id} />}
        <PostContent data={data} blogId={id} />
      </QueryResult>
    </BlogDetails>
  );
};

export default BlogDetail;

const BlogDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  h1: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
  },
  h4: {
    fontSize: '1.2em',
    marginBottom: 5,
  },
});
