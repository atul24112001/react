import { useRef } from 'react';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    
    const enteredComment = commentTextRef.current.value;
    if(enteredComment.trim() === ""){
      return;
    }

    props.onaddComment();
    addComments(enteredComment);
    commentTextRef.current.value ="";
  };

  const addComments = async(comments) => {
    try {
      const response = await fetch("https://react-http-b185e-default-rtdb.firebaseio.com/comments.json", {
        method: "POST",
        body: JSON.stringify({text: comments}),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(!response.ok) {
        throw new Error("Something went Wrong")
      }
  } catch (error) {
      console.log(error.message);
  } 
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
