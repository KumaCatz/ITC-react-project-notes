function GenerateNote({ notes, handleDelete }) {

    return (
        <div className='notes-container'>
            { notes.map((note) =>
                <div key={ note.id }>
                    <div className="note-header">
                        <div>
                            { note.date }
                        </div>
                        <button
                            onClick={ () => handleDelete(note.id) }>
                            X
                        </button>
                    </div>
                    <div className='content'>
                        {note.title && (
                            <div className='title'>
                            { note.title }
                            </div>
                        )}
                        <div>
                            { note.content }
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;