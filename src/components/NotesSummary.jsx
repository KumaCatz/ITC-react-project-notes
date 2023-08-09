import React, {useContext, useEffect, useState} from "react"
import { notesReducerActions } from "../reducers/notesReducer"
import NotesReducerContext from "../contexts/NotesReducerContext"

function NotesSummary() {
  const {notes, dispatchNotesChange} = useContext(NotesReducerContext)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(notes.length)
  }, [notes])

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => localStorage.clear()}>Clear Local Cache</button>
      <button onClick={() => dispatchNotesChange({type: notesReducerActions.SORT_BY_DATE, data: notes})}>Sort by Date</button>
    </>
  )
}

export default NotesSummary