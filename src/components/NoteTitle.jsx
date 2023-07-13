function NoteTitle ({ title, handleChange }) {

    return (
        <div className="note-title">
        <textarea
            type="text"
            placeholder="My title..."
            value={ title }
            name="title"
            onChange={ handleChange }
            >
        </textarea>
    </div>
    )
}

export default NoteTitle;