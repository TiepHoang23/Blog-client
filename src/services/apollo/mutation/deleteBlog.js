import gql from 'graphql-tag';

const DELETEBLOG_MUTATION = gql`
        mutation Mutation($blogId: ID!) {
        deleteBlogByUser(BlogId: $blogId) {
            isSuccess
            message
        }
        }
`;

export default DELETEBLOG_MUTATION;