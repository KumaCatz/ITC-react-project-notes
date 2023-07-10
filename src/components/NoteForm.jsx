import React, { useState } from 'react';
import GenerateNote from './GenerateNote';
import "../css/NoteForm.css";

const NoteForm = () => {
    const [note, setNote] = useState([]);
    const [input, setInput] = useState('');

    function handleClick(e) {
        e.preventDefault();
        setNote(notes => [...notes, { input }])
    }

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
        <div>
            <form>
                <h1>My form app I guess</h1>
                <fieldset className="fieldset">
                    <div className="textarea">
                        <textarea
                            id="textarea"
                            value={ input }
                            onChange={ handleChange }
                            >
                        </textarea>
                    </div>
                    <div className="submit">
                        <input
                            type="submit"
                            value="Add"
                            onClick={ handleClick }
                        />
                    </div>
                </fieldset>
            </form>
            <div>
                <GenerateNote note={ note } />
            </div>
        </div>
    )
}

export default NoteForm;