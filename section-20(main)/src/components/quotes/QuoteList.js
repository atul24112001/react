import { Fragment } from 'react';
import { useLocation, useHistory  } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes = [], ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const History = useHistory();
  const locaton = useLocation();

  const queryParam = new URLSearchParams(locaton.search);
  const isAscending = queryParam.get("sort") === "asc";

  const sortingHandler = () => {
    History.push({
      pathname: locaton.pathname,
      search:  `?sort=${isAscending ? "desc" : "asc"}` 
    })
    // History.push("/quotes?sort=" + (isAscending ? "desc" : "asc"))
  }

    const sortedQuotes = sortQuotes(props.quotes, isAscending);
  
    return (
      <Fragment>
        <div className={classes.sorting}>
          <button onClick={sortingHandler}>Sort {isAscending ? "Descending" : "Ascending"}</button>
        </div>
        <ul className={classes.list}>
          {sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
              onClick={props.onGetSingleQuote}
            />
          ))}
        </ul>
      </Fragment>
    );
};

export default QuoteList;
