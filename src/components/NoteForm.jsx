import { useState } from 'react';
import GenerateNote from './GenerateNote';
import "../css/NoteForm.css";

function NoteForm() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [input, setInput] = useState('');
    // const [height, setHeight] = useState(0);
    const [idCounter, setIdCounter] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        if(input === '') return;

        const newNote = {
            id: idCounter,
            content: input,
            date: new Date().toString(),
            title: title,
        }

        setNotes([...notes, newNote]);
        setInput('');
        setTitle('');
        setIdCounter(idCounter + 1);
    }

    // function handleKeyDown(e) {
    //     if(e.key === 'Enter') {
    //         handleClick(e);
    //     }
    // }

    function handleChange(e) {
        const { name, style, value } = e.target;

        if (name === 'title') {
            setTitle(value);
        } else if (name === 'input') {
            setInput(value);
        }

    }

    return (
        <div>
            <h1>Notepad</h1>
            <form>
                <fieldset className="fieldset">
                    <div className="note-title">
                        <textarea
                            type="text"
                            placeholder="My title..."
                            value={ title }
                            name="title"
                            onChange={ handleChange }
                            >
                        </textarea>
                    </div>
                    <div className="textarea">
                        <textarea
                            placeholder="My note..."
                            value={ input }
                            name="input"
                            onChange={ handleChange }
                            // onKeyDown={ handleKeyDown }
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