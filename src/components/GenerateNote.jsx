import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
                        <Button className='content' variant="primary" onClick={handleShow}>
                            {note.title && (
                                <div className='title'>
                                { note.title }
                                </div>
                            )}
                            <div>
                                { note.content }
                            </div>
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{ note.title }</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{ note.content }</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;