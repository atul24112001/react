import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

export default function NewQuote(props) {
    return (
        <React.Fragment>
            <QuoteForm isLoading={props.addQuoteStatus} onAddQuote={props.onAddQuote}/>
        </React.Fragment>
    )
}
