import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Comments from "./components/comments/Comments";
import CommentsList from "./components/comments/CommentsList";
import MainNavigation from "./components/layout/MainNavigation";
import HighlightedQuote from "./components/quotes/HighlightedQuote";
import QuoteList from "./components/quotes/QuoteList";
import QuoteForm from "./components/quotes/QuoteForm";

function App() {
  const [comments, setcomments] = useState([]);
  const [error, setError] = useState(null)
  const [quotes, setQuotes] = useState([{ id: "q1", text: "Set Time Equals to Zero", author: "A Pandey" }])

  useEffect(() => {
    const addCommentHandler = async () => {
      try {
        const response = await fetch("https://react-http-b185e-default-rtdb.firebaseio.com/comments.json");
        if (!response.ok) {
          throw new Error("Cant load comments")
        }
  
        const data = await response.json();
  
        let commentData = [];
  
        for (const key in data) {
          commentData.push({ id: key, text: data[key].text })
        }
        setcomments(commentData);
      } catch (error) {
        setError(error.message);
      }
      console.log("hello")
    }
  
    addCommentHandler();
  }, [])


  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path="/" exact>
          <Redirect to="/all-quote" />
        </Route>
        <Route path="/all-quote">
          <QuoteList quotes={quotes} />
        </Route>
        <Route path="/quote-detail/:quoteId">
         <HighlightedQuote  quotes={quotes} />
         <Comments onaddComment={addCommentHandler} />
         <CommentsList comments={comments} error={error} />
        </Route>
        <Route path="/add-quote">
          <QuoteForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
