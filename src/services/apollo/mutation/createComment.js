import gql from 'graphql-tag';

const CREATECOMMENT_MUTATION = gql`
  mutation Mutation($blogId: ID!, $message: String!) {
    createCommentByUser(blogId: $blogId, message: $message) {
      comment {
        createdAt
        message

        author {
          username
        }
      }
      message
      isSuccess
    }
  }
`;

export default CREATECOMMENT_MUTATION;
