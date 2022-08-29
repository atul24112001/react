import { useRef } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredComment = commentTextRef.current.value;
    if(enteredComment.trim() === ""){
      return;
    }

    props.onAddComment(enteredComment);
  };

  if(props.status === "Pending") {
    return <div className='centered'><LoadingSpinner /></div>
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
