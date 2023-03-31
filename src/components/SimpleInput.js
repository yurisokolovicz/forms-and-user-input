import { useState, useRef, useEffect } from 'react';

const SimpleInput = props => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log('Name input is valid');
            return;
        }
    }, [enteredNameIsValid]);

    const nameInputChangedHandler = event => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        // Adding validation - check if it is empty
        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return; // stop the function execution
        }
        setEnteredNameIsValid(true);

        console.log(enteredName);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName('');
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type="text" id="name" onChange={nameInputChangedHandler} value={enteredName} />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
