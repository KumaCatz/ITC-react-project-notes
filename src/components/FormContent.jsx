import { useContext } from "react";
import { NotesContext } from "../App";

function FormContent() {
    const {content, height, handleChange} = useContext(NotesContext)

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