import { NotesContext } from "../App";
import React, { useState, useContext } from 'react';
import NotesReducerContext from "../contexts/NotesReducerContext";
import Button from 'react-bootstrap/Button';
import NoteModal from "./NoteModal";
import "../css/GenerateNote.css";

function GenerateNote() {
    const {handleDelete} = useContext(NotesContext)
    const {notes} = useContext(NotesReducerContext)
    const [show, setShow] = useState(false);

    return (
        <>
            <div className='notes-container'>
            { notes.map((note) =>
                <div key={ note.id }>
                    <div className="note-header">
                        <div>
                            { note.date.toString() }
                        </div>
                        <button
                            onClick={ () => handleDelete(note) }>
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
        </>

    )
}

export default GenerateNote;