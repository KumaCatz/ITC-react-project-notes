import React from 'react';

const GenerateNote = ({ note }) => {

    return (
        <>
        hiiii
            { note.map((text, index) => {
                <div key={ index }>{text}</div>
                }
            )}
        </>
    )
}

export default GenerateNote;