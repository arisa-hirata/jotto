import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
    const [currentGuess, setCurrentGuess] = React.useState("");
    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button
                    data-test="submit-button"
                    onClick={(evt) => {
                        evt.preventDefault();
                        // TODO: update guessedWords
                        // TODO: check against secretWord and update success if needed
                        setCurrentGuess("")
                    }}
                    className="btn btn-primary mb-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

Input.propType = {
    secretWord: PropTypes.string.isRequired
}

export default Input;
