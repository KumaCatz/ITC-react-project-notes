import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NoteModal from './NoteModal';

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
                    <div className='content'>
                        <NoteModal />
                        {note.title && (
                            <div className='title'>
                            { note.title }
                            </div>
                        )}
                        <div>
                            { note.content }
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;