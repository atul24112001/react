import React, { useEffect} from 'react'
import {  useHistory, useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttps from '../hooks/use-https';
import { getSingleQuote } from '../lib/apis';
import NotFound from './NotFound';
import LoadingSpinner from "../components/UI/LoadingSpinner"

export default function QuoteDetails(props) {
  const {sendRequest, status, data: quoteDetails} = useHttps(getSingleQuote, true);  
    const param = useParams();
    const History = useHistory();
    const Match = useRouteMatch();

    const { quoteId } = param;

    const viewCommentsHandler = () => {
        History.push(`${Match.url}/comments`)
    }
    useEffect(() => {
        sendRequest(quoteId)
    },[sendRequest, quoteId])

    if (quoteDetails) {
        return (
            <React.Fragment>
                <HighlightedQuote quote={quoteDetails}/>
                <Route path={Match.path} exact>
                    <button className='btn centered' onClick={viewCommentsHandler}>View Comments</button>
                </Route>
                <Route path={`${Match.path}/comments`} exact>
                    <Comments />
                </Route>
            </React.Fragment>
        )
    }
    if (status === "Pending") {
        return <div className='centered'><LoadingSpinner /></div>;
    }

    return (
        <NotFound />
    )

}
