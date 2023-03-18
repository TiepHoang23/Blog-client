import gql from 'graphql-tag';

const GETLISTBLOG_QUERY = gql`
  query ListBlogs {
    listBlogs {
      content
      id
      nlikes
      title
    }
  }
`;

export default GETLISTBLOG_QUERY;
