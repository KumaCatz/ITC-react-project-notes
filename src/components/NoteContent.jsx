function NoteContent({ content, height, handleChange }) {

    return (
        <div className="textarea">
        <textarea
            placeholder="My note..."
            value={ content }
            style={{height: { height }}}
            name="content"
            onChange={ handleChange }
            >
        </textarea>
    </div>
    )
}

export default NoteContent;