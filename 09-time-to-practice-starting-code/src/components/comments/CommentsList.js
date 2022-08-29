import { useEffect } from 'react';
import useHttps from '../../hooks/use-https';
import { getAllComments } from '../../lib/apis';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {
  const {sendRequest, status, data = []} = useHttps(getAllComments);

  useEffect(() => {
    sendRequest(props.quoteId);
  }, [sendRequest, props])

  if(status === "Pending") {
    return <div className='centered'><LoadingSpinner /></div>
  }
  return (
    <ul className={classes.comments}>
      {data.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
