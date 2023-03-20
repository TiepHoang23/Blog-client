import gql from 'graphql-tag';

const GETBLOGBYID_QUERY = gql`
  query Query($blogId: ID!) {
    getBlogById(blogId: $blogId) {
      comment {
        message
        createdAt
        author {
          username
        }
      }
      content
      title
      id
    }
  }
`;

export default GETBLOGBYID_QUERY;
