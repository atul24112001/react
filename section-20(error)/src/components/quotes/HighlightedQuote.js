import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  const param = useParams();

  useEffect(() => {
      // const Index = props.quote.findIndex(quote => quote.id === param.quoteId);
  // console.log(props.quotes)
  }, [props])

  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
