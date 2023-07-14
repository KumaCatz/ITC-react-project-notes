import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NoteModal from "./NoteModal";
import "../css/GenerateNote.css";

function GenerateNote({ notes, handleDelete }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        
                        <Button className='content' variant="primary" onClick={ handleShow }>
                            {note.title && (
                                <div className='title'>
                                { note.title }
                                </div>
                            )}
                            <div>
                                { note.content }
                            </div>
                        </Button>

                        <NoteModal title={ note.title } content={ note.content } show={ show } handleClose={ handleClose }  />

                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;