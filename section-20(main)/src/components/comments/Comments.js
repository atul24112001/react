import { useState } from 'react';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';
import useHttps from '../../hooks/use-https';
import { addComment } from '../../lib/apis';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const {sendRequest, status} = useHttps(addComment);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();

  const startAddCommentHandler = (comment) => {
    setIsAddingComment(true);
    sendRequest({CommentData: {text: comment}, quoteId: param.quoteId})
  };
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm status={status} onAddComment={startAddCommentHandler}/>}
      <CommentsList quoteId={param.quoteId} />
    </section>
  );
};

export default Comments;
