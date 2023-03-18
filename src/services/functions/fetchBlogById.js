import { ApolloClient, InMemoryCache } from '@apollo/client';
import GETBLOGBYID_QUERY from '../apollo/queries/getBlogById';

const fetchBlogById = async (myInput) => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  try {
    const result = await client.query({
      query: GETBLOGBYID_QUERY,
      variables: {
        BlogId: myInput,
      },
    });
    const { data } = result;
    return data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

export default fetchBlogById;
