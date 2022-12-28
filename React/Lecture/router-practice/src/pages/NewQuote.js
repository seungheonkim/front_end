import QuoteForm from "../components/quotes/QuoteForm";
import {useNavigate} from "react-router-dom";
import {addQuote} from "../lib/api";
import useHttp from "../hooks/use-http";
import {useEffect} from "react";

const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'completed') {
            navigate('/quotes');
        }
    }, [status, navigate]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    )
}

export default NewQuote;