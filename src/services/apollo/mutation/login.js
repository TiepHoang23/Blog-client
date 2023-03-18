import gql from 'graphql-tag';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      isSuccess
      message
      token
    }
  }
`;

export default LOGIN_MUTATION;