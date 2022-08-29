// import { useEffect } from 'react';
import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {

  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
      {props.error}
    </ul>
  );
};

export default CommentsList;
