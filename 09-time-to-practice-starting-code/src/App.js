import React, { Suspense, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NotFound from "./Pages/NotFound";
import useHttps from "./hooks/use-https";
import { addQuote } from "./lib/apis";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const QuoteDetails = React.lazy(() => import("./Pages/QuoteDetails"));
const NewQuote = React.lazy(() => import("./Pages/NewQuote"))

function App() {
  const { sendRequest: addQuotes, status: addQuoteStatus } = useHttps(addQuote);
  const History = useHistory();

  useEffect(() => {
    if (addQuoteStatus === "Completed") {
      History.push("/quotes")
    }
  }, [addQuoteStatus, History])

  const addQuoteHandler = data => {
    addQuotes(data);
  }

  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetails />
          </Route>
          <Route path='/new-quote'>
            <NewQuote isLoading={addQuoteStatus === "Pending"} onAddQuote={addQuoteHandler} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>

  );
}

export default App;
