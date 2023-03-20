import { useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import CREATECOMMENT_MUTATION from '../../../services/apollo/mutation/createComment';
import './Feedback.css';
import FeedbackItem from './FeedbackItem';

const Feedback = ({ comment, blogId }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  // Feedback input
  const [feedback, setFeedback] = useState('');
  const [Error, setError] = useState(null);

  const [Comment] = useMutation(CREATECOMMENT_MUTATION, {
    variables: { blogId, message: feedback },
  });

  const handleComment = async (e) => {
    e.preventDefault();
    const { error, data } = await Comment();
    if (error) {
      setError({
        isSuccess: false,
        message: error.message,
      });
      return;
    }
    if (!data.createCommentByUser.isSuccess) {
      setError({
        isSuccess: false,
        message: data.createCommentByUser.message,
      });
      return;
    }
    navigate(0);
  };
  return (
    <div className='feedback-container'>
      <h4>Feedback</h4>
      <div className='box-feedback'>
        {comment &&
          comment.map((feedback) => (
            <FeedbackItem key={feedback.id} content={feedback} />
          ))}
      </div>

      {token && (
        <form onSubmit={(e) => handleComment(e)}>
          <input
            className='input-feedback'
            placeholder='Leave your thought...'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></input>
          <button type='submit'>Send</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
