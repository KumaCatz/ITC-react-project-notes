function GenerateNote({ notes }) {

    return (
        <div className='notes-container'>
            { notes.map((object) =>
                <div key={ object.id }>
                    <div className="note-header">
                        <div>
                            { object.date }
                        </div>
                        <button
                            onClick={ () => handleDelete(object.id) }>
                            X
                        </button>
                    </div>
                    <div className='content'>
                        {object.title && (
                            <div className='title'>
                            { object.title }
                            </div>
                        )}
                        <div>
                            { object.content }
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;