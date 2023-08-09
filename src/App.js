import React, { useState, createContext, useContext, useReducer, useEffect } from 'react';
import GenerateNote from './components/GenerateNote';
import NoteForm from "./components/NoteForm";
import { notesReducer, notesReducerActions } from './reducers/notesReducer';
import NotesReducerContext from './contexts/NotesReducerContext';
import NotesSummary from './components/NotesSummary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const NotesContext = createContext(null)

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [height, setHeight] = useState(0);
  const [idCounter, setIdCounter] = useState(0);
  const [notes, dispatchNotesChange] = useReducer(notesReducer, [])

  useEffect(() => {
    if (localStorage.length != 0) {dispatchNotesChange({type: notesReducerActions.FETCH_STORAGE})}
  }, [])

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
        date: new Date(),
        title: title,
    }
    dispatchNotesChange({
      type: notesReducerActions.ADD_ITEM,
      data: newNote,
    })
    setContent('');
    setTitle('');
    setIdCounter(idCounter + 1);
}

function handleDelete(note) {
  if (window.confirm('Delete this note?') == true) {
    dispatchNotesChange({
      type: notesReducerActions.DELETE_ITEM,
      data: note
    })
  }
}

  return (
    <NotesReducerContext.Provider value={{notes, dispatchNotesChange}}>
      <NotesContext.Provider value={{title,
        content,
        height,
        handleChange,
        handleClick,
        handleDelete,
        }}>
        <NoteForm />
        <NotesSummary />
        <GenerateNote />
      </NotesContext.Provider>
    </NotesReducerContext.Provider>
  );
}

export default App;
