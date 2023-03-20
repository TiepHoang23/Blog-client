import Feedback from '../Feedback/Feedback';
import { useParams } from 'react-router';
import './PostContent.css';

const PostContent = ({ data, blogId }) => {
  const { title, author, content, comment } = data.getBlogById;

  return (
    <div className='post-content'>
      <h2 className='post-title'>Post: {title}</h2>
      <p>Posted on by {author}</p>
      <br />
      <p>{content}</p>
      <Feedback comment={comment} blogId={blogId} />
    </div>
  );
};

export default PostContent;
/*
ueState(comment.set comt)

fetch()
*/