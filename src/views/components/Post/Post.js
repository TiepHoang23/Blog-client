import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import DELETEBLOG_MUTATION from '../../../services/apollo/mutation/deleteBlog';
import './Post.css';

const Post = ({ blog }) => {
  const { title, author, content, id } = blog;
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [Delete] = useMutation(DELETEBLOG_MUTATION, {
    variables: { blogId: id },
  });

  const handleOnDelete = async () => {
    const { error, data } = await Delete();
    if (error) {
      toast.error(`Delete ERROR:${error.message}`);
      return;
    }
    if (data.deleteBlogByUser.isSuccess === 'false') {
      toast.error(`Delete ERROR:${data.deleteBlogByUser.message}`);
      return;
    }
    navigate('/');
    toast.success(`Delete Success!`);
  };
  return (
    <div>
      {token && <button onClick={handleOnDelete}>Delete</button>}
      <div className='post' onClick={() => navigate(`/blog/${id}`)}>
        <h4 className='post-title'>Title: {title}</h4>
        <p>By: {author}</p>
        <p> Content: {content}</p>
      </div>
    </div>
  );
};

export default Post;
