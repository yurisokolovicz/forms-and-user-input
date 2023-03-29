import { useState, useRef } from 'react';

const SimpleInput = props => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');

    const nameInputChangedHandler = event => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        console.log(enteredName);
        // In the React Refs we always have the current property which points to the current value of the ref. Because refs are always objects, we can access the current property.
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        // nameInputRef.current.value = ''; // DOM manupulation is bad. Only React should manipulate the DOM.
        setEnteredName('');
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" id="name" onChange={nameInputChangedHandler} value={enteredName} />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
