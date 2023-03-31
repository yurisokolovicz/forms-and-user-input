import { useState } from 'react';

const SimpleInput = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true;
    }

    const nameInputChangedHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        // setEnteredNameTouched(true) indicates that the user has touched the input field. If the user has not touched the input field, we do not want to show the error message. If the user has touched the input field, we want to show the error message.
        setEnteredNameTouched(true);

        // Adding validation - check if it is empty
        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        setEnteredName('');
        setEnteredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" onChange={nameInputChangedHandler} onBlur={nameInputBlurHandler} value={enteredName} />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
