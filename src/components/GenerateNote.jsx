import React from 'react';

function GenerateNote({ note }) {
    
    return (
        <div>
            { note.map((object) => <div key={ object.id }>{ object.content }</div>) }
        </div>
    )
}

export default GenerateNote;