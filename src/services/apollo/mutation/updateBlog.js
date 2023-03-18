import gql from 'graphql-tag';

const UPDATEBLOG_MUTATION = gql`
  mutation UpdateBlogByUser($blogId: ID!, $blogInput: BlogInput!) {
  updateBlogByUser(BlogId: $blogId, BlogInput: $blogInput) {
    isSuccess
    message
    blog {
      content
      title
    }
  }
}
`;

export default UPDATEBLOG_MUTATION;