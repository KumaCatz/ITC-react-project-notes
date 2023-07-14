function FormContent({ content, height, handleChange }) {

    return (
        <div className="note-input input-content">
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

export default FormContent;