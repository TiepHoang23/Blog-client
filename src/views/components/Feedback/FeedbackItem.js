import './FeedbackItem.css';

const FeedbackItem = (props) => {
  const { content } = props;

  return (
    <div className='feedback-item'>
      <p>{content.author.username} said:</p>
      <p>{content.message}</p>
    </div>
  );
};

export default FeedbackItem;
