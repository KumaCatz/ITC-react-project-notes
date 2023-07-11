import React, { useState } from 'react';
import "../css/GenerateNote.css";

function GenerateNote({ notes }) {
    const [notesList, setNotesList] = useState(notes);

    function handleDelete(id) {
        if (window.confirm('Delete this note?') == true) {
            const index = notes.slice().map(element => element.id).indexOf(id);
            console.log('index ' + index)
            const updatedNotes = notes.splice(index, 1);
            setNotesList(updatedNotes);
            console.log(notes)
        }

    }

    return (
        <div className='notes-container'>
            { notes.map((object) =>
                <div key={ object.id }>
                    <div>
                        { object.date }
                    </div>
                    <div>
                        { object.content }
                    </div>
                    <button
                        onClick={ () => handleDelete(object.id) }>
                        delete
                    </button>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;