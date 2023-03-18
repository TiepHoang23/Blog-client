import gql from 'graphql-tag';

const CREATEBLOG_MUTATION = gql`
  mutation CreateBlogByUser($blogInput: BlogInput!) {
    createBlogByUser(BlogInput: $blogInput) {
      isSuccess
      message
    }
  }
`;

export default CREATEBLOG_MUTATION;