import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function NoteModal({ title, content, show, handleClose }) {
    const [editTitle, setEditTitle] = useState(title);
    const [editContent, setEditContent] = useState(content);

    function handleEdit(e) {
        const { name, innerText } = e.target;
        
        if (name == "title") {
            setEditTitle(innerText);
        }
        if (name == "body") {
            setEditContent(innerText);
        }
    }

    return(
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title contentEditable name="title" onInput={ handleEdit }>{ title }</Modal.Title>
                </Modal.Header>
                <Modal.Body contentEditable name="body" onInput={ handleEdit }>{ content }</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                    Update
                    </Button>
                </Modal.Footer>
            </Modal>
    )
}

export default NoteModal;