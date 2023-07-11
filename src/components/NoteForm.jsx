import { useState } from 'react';
import GenerateNote from './GenerateNote';
import "../css/NoteForm.css";

function NoteForm() {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
    const [idCounter, setIdCounter] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        if(input === '') return;

        const newNote = {
            id: idCounter,
            content: input,
            date: new Date().toString(),
        }

        setNotes([...notes, newNote]);
        setInput('');
        setIdCounter(idCounter + 1);
    }

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            handleClick(e);
        }
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
                            onKeyDown={ handleKeyDown }
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
            <GenerateNote notes={ notes } />
        </div>
    )
}

export default NoteForm;