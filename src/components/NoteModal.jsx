import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function NoteModal({ title, content, show, handleClose }) {

    function handleEdit(e) {
        console.log(e.target.innerText)
    }

    return(
            <Modal show={ show } onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title contentEditable onClick={ handleEdit }>{ title }</Modal.Title>
                </Modal.Header>
                <Modal.Body contentEditable onClick={ handleEdit }>{ content }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
    )
}

export default NoteModal;