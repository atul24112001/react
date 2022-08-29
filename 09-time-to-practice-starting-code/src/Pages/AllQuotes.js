import React, { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import QuoteList from "../components/quotes/QuoteList"
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttps from '../hooks/use-https';
import { getAllQuotes } from '../lib/apis';

//   const quotes = [
//     {id: "q1", text: "Set Time t = 0.", author: "Alakh Pandey"},
//     {id: "q2", text: "Change in Momentum dp = 0", author: "HC varma"},
// ]

export default function AllQuotes(props) {
    const { sendRequest, status, data: loadedQuotes, error } = useHttps(getAllQuotes, true);

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    if (status === "Pending") {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return (
            <p className='centered focused'>{error}</p>
        )
    }

    if (status === "Completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return (
        <React.Fragment>
            <QuoteList onGetSingleQuote={props.onGetSingleQuote} quotes={loadedQuotes} />
        </React.Fragment>
    )
}