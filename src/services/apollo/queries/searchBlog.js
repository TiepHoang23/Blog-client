import gql from 'graphql-tag';

const SEARCHBLOG_QUERY = gql`
  query SearchBlogs($filters: BlogFilterInput) {
    searchBlogs(filters: $filters) {
      content
      id
      nlikes
      title
    }
  }
`;

export default SEARCHBLOG_QUERY;
