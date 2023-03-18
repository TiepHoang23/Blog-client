import {
    ApolloClient, InMemoryCache,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
  import _ from 'lodash';
  import {Auth} from "@aws-amplify/auth"
  

  
  const { localStorage } = global.window;
  
  const cache = new InMemoryCache({ addTypename: false });

  
  const createClient = async (isUsingCache = false, defaultToken) => {
    const  token  = (await Auth.currentSession()).getAccessToken().getJwtToken();
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        'access-token': defaultToken || token,
      },
    }));
    return new ApolloClient({
        uri: 'http://localhost:4000',
        cache: new InMemoryCache(),
      });
  
    }
  export default createClient;