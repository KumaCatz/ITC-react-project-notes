function NoteButton({ handleClick }) {

    return (
        <div className="submit">
            <input
                type="submit"
                value="Add"
                onClick={ handleClick }
            />
        </div>
    )
}

export default NoteButton;