import { ApolloClient, InMemoryCache } from '@apollo/client';

import LOGIN_MUTATION from '../apollo/mutation/login';

const handleSubmitform = async (myInput) => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  try {
    const result = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        input: myInput,
      },
    });
    const { data } = result;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

export default handleSubmitform;
