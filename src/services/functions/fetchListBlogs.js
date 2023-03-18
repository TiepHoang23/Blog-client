import { ApolloClient, InMemoryCache } from '@apollo/client';
import GETLISTBLOG_QUERY from '../apollo/queries/getBlogs';

const fetchListBlog = async () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  try {
    const result = await client.query({
      query: GETLISTBLOG_QUERY,
    });
    const { data } = result;
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchListBlog;
