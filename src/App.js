import { useState, createContext, useContext } from 'react';
import GenerateNote from './components/GenerateNote';
import NoteForm from "./components/NoteForm";
import NotesData from './components/NotesData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const NotesContext = createContext(null)

function App() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [height, setHeight] = useState(0);
  const [idCounter, setIdCounter] = useState(0);
  const [notesList, setNotesList] = useState(notes);

  function handleChange(e) {
    const { name, value, style } = e.target;

    if (name === 'title') {
        setTitle(value);
    } else if (name === 'content') {
        setContent(value);
    }

    style.height = 'auto';
    style.height = `${e.target.scrollHeight}px`;
    setHeight(style.height);
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
    <NotesContext.Provider value={{title,
      notes,
      content,
      height,
      handleChange,
      handleClick,
      handleDelete,
      }}>
      <NoteForm />
      <GenerateNote />
    </NotesContext.Provider>
  );
}

export default App;
