import gql from 'graphql-tag';

const LOGOUT_MUTATION = gql`
  mutation Mutation {
    logout {
      isSuccess
      message
    }
  }
`;

export default LOGOUT_MUTATION;
