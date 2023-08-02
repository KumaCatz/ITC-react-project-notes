import { NotesContext } from "../App";
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import NoteModal from "./NoteModal";
import "../css/GenerateNote.css";

function GenerateNote() {
    const {notes, handleDelete} = useContext(NotesContext)
    const [show, setShow] = useState(false);

    return (
        <div className='notes-container'>
            { notes.map((note) =>
                <div key={ note.id }>
                    <div className="note-header">
                        <div>
                            { note.date }
                        </div>
                        <button
                            onClick={ () => handleDelete(note.id) }>
                            delete
                        </button>
                    </div>
                    <div className="note-content">
        
                        <Button className='content' variant="primary" onClick={() => setShow(true)}>
                            {note.title && (
                                <div className='title'>
                                { note.title }
                                </div>
                            )}
                            <div>
                                { note.content }
                            </div>
                        </Button>

                        <NoteModal title={ note.title } content={ note.content } show={ show } handleClose={() => setShow(false)} id={note.id} />

                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;