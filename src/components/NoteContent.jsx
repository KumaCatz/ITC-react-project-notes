function NoteContent({ content, handleChange }) {


    // function handleKeyDown(e) {
    //     if(e.key === 'Enter') {
    //         handleClick(e);
    //     }
    // }

    return (
        <div className="textarea">
        <textarea
            placeholder="My note..."
            value={ content }
            name="content"
            // style={ {height: newHeight} }
            onChange={ handleChange }
            // onKeyDown={ handleKeyDown }
            >
        </textarea>
    </div>
    )
}

export default NoteContent;