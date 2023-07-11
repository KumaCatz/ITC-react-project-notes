import React, { useState } from 'react';
import "../css/GenerateNote.css";

function GenerateNote({ notes }) {
    const [notesList, setNotesList] = useState(notes);

    function handleDelete(id) {
        if (window.confirm('Delete this note?') == true) {
            const index = notes.slice().map(element => element.id).indexOf(id);
            const updatedNotes = notes.splice(index, 1);

            setNotesList(updatedNotes);
        }
    }

    return (
        <div className='notes-container'>
            { notes.map((object) =>
                <div key={ object.id }>
                    <div className="note-header">
                        <div>
                            { object.date }
                        </div>
                        <button
                            onClick={ () => handleDelete(object.id) }>
                            X
                        </button>
                    </div>
                    <div className='content'>
                        {object.title && (
                            <div className='title'>
                            { object.title }
                            </div>
                        )}
                        <div>
                            { object.content }
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;