import { useState } from 'react';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';
import NoteButton from './NoteButton';
import GenerateNote from './GenerateNote';
import "../css/NoteForm.css";
import "../css/GenerateNote.css"

function NoteForm() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [idCounter, setIdCounter] = useState(0);
    const [notesList, setNotesList] = useState(notes);

    function handleChange(e) {
        const { name, value } = e.target;
    
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'content') {
            setContent(value);
        }
    }
    
    function handleClick(e) {
        e.preventDefault();
        if(content === '') return;
    
        const newNote = {
            id: idCounter,
            content: content,
            date: new Date().toString(),
            title: title,
        }
    
        setNotes([...notes, newNote]);
        setContent('');
        setTitle('');
        setIdCounter(idCounter + 1);
    }

    function handleDelete(id) {
        if (window.confirm('Delete this note?') == true) {
            const index = notes.slice().map(element => element.id).indexOf(id);
            const updatedNotes = notes.splice(index, 1);

            setNotesList(updatedNotes);
        }
    }


    return (
        <div>
            <h1>Notepad</h1>
            <form>
                <fieldset className="fieldset">
                    <NoteTitle title={ title } handleChange={ handleChange } />
                    <NoteContent content={ content } handleChange={ handleChange } />
                    <NoteButton handleClick={ handleClick } />
                </fieldset>
            </form>
            <GenerateNote notes={ notes } handleDelete={ handleDelete } />
        </div>
    )
}

export default NoteForm;