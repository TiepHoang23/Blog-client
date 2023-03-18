import gql from 'graphql-tag';

const GETBLOGBYID_QUERY = gql`
  query GetBlogById($blogId: ID!) {
    getBlogById(blogId: $blogId) {
      content
      id
      nlikes
      title
    }
  }
`;

export default GETBLOGBYID_QUERY;
