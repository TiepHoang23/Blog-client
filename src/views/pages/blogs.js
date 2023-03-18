import React from 'react';
import { useQuery, gql } from '@apollo/client';
import BlogCard from '../containers/BlogCard';
import Layout from '../components/layout';
import QueryResult from '../components/query-result';
import GETLISTBLOG_QUERY from '../../services/apollo/queries/getBlogs';
const Blogs = () => {
  const { loading, error, data } = useQuery(GETLISTBLOG_QUERY);
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.listBlogs?.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Blogs;
