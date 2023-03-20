import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Post from '../components/Post/Post';
import Layout from '../components/layout';
import QueryResult from '../components/query-result';

import '../components/Post/PostContainer.css';
import SEARCHBLOG_QUERY from '../../services/apollo/queries/searchBlog';
const Blogs = () => {
  const [searchKey, setSearchKey] = useState('');
  const [keyword, setKeyword] = useState('');

  const { loading, error, data, refetch } = useQuery(SEARCHBLOG_QUERY, {
    variables: { filters: { title: searchKey } },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKey(keyword);
    refetch();
  };
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <div className='posts-container'>
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              className='Search'
              placeholder='Input search key....'
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            ></input>
            <button type='submit'>Search</button>
          </form>

          <h2>All posts</h2>
          {data?.searchBlogs?.map((blog, index) => (
            <Post key={blog.id} blog={blog} />
          ))}
        </div>
      </QueryResult>
    </Layout>
  );
};

export default Blogs;
