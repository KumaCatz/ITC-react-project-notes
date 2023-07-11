import React, { useState } from 'react';
import "../css/GenerateNote.css";

function GenerateNote({ notes }) {
    const [notesList, setNotesList] = useState(notes);
    
    function handleDelete(id) {
        if (window.confirm('Delete this note?') == true) {
            const updatedNotes = notes.splice(id, 1);
            setNotesList(updatedNotes);
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