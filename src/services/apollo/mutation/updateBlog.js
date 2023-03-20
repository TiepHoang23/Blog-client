import gql from 'graphql-tag';

const UPDATEBLOG_MUTATION = gql`
  mutation Mutation($blogId: ID!, $blogInput: BlogInput!) {
    updateBlogByUser(BlogId: $blogId, BlogInput: $blogInput) {
      isSuccess
      message
      blog {
        id
        content
        author {
          username
        }
      }
    }
  }
`;

export default UPDATEBLOG_MUTATION;
