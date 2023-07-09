import React, { useState } from 'react';
import GenerateNote from './GenerateNote';
import "../css/NoteForm.css";

const NoteForm = () => {

    function handleClick(e) {
        e.preventDefault();
        const textarea = document.getElementById("textarea");
        if(textarea) {
            <GenerateNote />
        };
    }

    return (
        <form>
            <h1>My form app I guess</h1>
            <fieldset className="fieldset">
                <div className="textarea">
                    <textarea id="textarea"></textarea>
                </div>
                <div className="submit">
                    <input
                        type="submit"
                        value="Add"
                        onClick={ handleClick }
                    />
                </div>
            </fieldset>
        </form>
    )
}

export default NoteForm;