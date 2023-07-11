import React from 'react';
import "../css/GenerateNote.css";

function GenerateNote({ note }) {

    return (
        <div className='notes-container'>
            { note.map((object) =>
                <div key={ object.id }>
                    <div>
                        { object.date }
                    </div>
                    <div>
                        { object.content }
                    </div>
                </div>
            ) }
        </div>
    )
}

export default GenerateNote;