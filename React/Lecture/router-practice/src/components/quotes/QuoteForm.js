import {Fragment, useRef, useState} from 'react';
import ReactRouterPrompt from "react-router-prompt";
import Modal from 'react-modal';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const QuoteForm = (props) => {
    const [isEntered, setIsEntered] = useState(false);
    const authorInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        // optional: Could validate here

        props.onAddQuote({author: enteredAuthor, text: enteredText});
    };

    const finishEnteringHandler = () => {
        setIsEntered(false);
    }

    const formFocusedHandler = () => {
        setIsEntered(true);
    }

    return (
        <Fragment>
            <ReactRouterPrompt when={isEntered}>
                {({isActive, onConfirm, onCancel}) => (
                    <Modal isOpen={isActive} ariaHideApp={false} style={customStyles}>
                        <p>Do you really want to leave?</p>
                        <p>All your data will be lost!!</p>
                        <button onClick={onCancel}>Cancel</button>
                        <button onClick={onConfirm}>Ok</button>
                    </Modal>
                )}
            </ReactRouterPrompt>
            <Card>
                <form onFocus={formFocusedHandler} className={classes.form} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner/>
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button className='btn' onClick={finishEnteringHandler}>Add Quote</button>
                    </div>
                </form>
            </Card>

        </Fragment>
    );
};

export default QuoteForm;
