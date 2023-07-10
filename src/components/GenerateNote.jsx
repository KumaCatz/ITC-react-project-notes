import React from 'react';

function GenerateNote({ note }) {

    return (
        <div>
            hiiiii
            { note.map((text, index) => {
                return <div key={ index }>{text}</div>
                }
            )}
        </div>
    )
}

export default GenerateNote;