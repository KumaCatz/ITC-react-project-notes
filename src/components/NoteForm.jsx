import { useState } from 'react';
import GenerateNote from './GenerateNote';
import "../css/NoteForm.css";

function NoteForm() {
    const [note, setNote] = useState([]);
    const [input, setInput] = useState('');
    const [index, setIndex] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        if(input === '') return;
        setNote([...note, input])
        setIndex(index + 1);
        setInput('');
        console.log(note)
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